"use client";

import { useState } from "react";
import { editProductService } from "./../service/editProduct.service";

const COLORS = ["green", "gray", "red", "blue", "white"];
const SIZES = ["s", "m", "l", "xl", "xxl", "xxxl"];

export default function EditProductModal({ product, categories, onClose, onUpdated }) {
    const [form, setForm] = useState({
        name: product.name || "",
        price: product.price || "",
        categoryId: product.categoryId || "",
        imageUrl: product.imageUrl || "",
        description: product.description || "",
        colors: product.colors || [],
        sizes: product.sizes || [],
    });
    const [loading, setLoading] = useState(false);

    function toggleChip(field, value) {
        setForm((f) => ({
            ...f,
            [field]: f[field].includes(value)
                ? f[field].filter((v) => v !== value)
                : [...f[field], value],
        }));
    }

    async function handleSubmit() {
        if (!form.name || !form.price) return alert("Name and price are required.");
        setLoading(true);
        try {
            await editProductService(product.productId, {
                ...form,
                price: Number(form.price),
            });
            onUpdated?.({ ...product, ...form, price: Number(form.price) });
            onClose();
        } catch (e) {
            alert("Failed: " + e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
            <div className="w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">

                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Edit product</h2>
                        <p className="text-xs text-gray-500 mt-0.5">Update the product details below.</p>
                    </div>
                    <button onClick={onClose} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 text-sm">✕</button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-medium text-gray-700">Name</label>
                        <input className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-gray-400"
                               value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-medium text-gray-700">Price</label>
                        <input type="text" className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-gray-400"
                               value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-medium text-gray-700">Category</label>
                        <select className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-gray-400"
                                value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })}>
                            <option value="">Select...</option>
                            {categories.map((c) => (
                                <option key={c.categoryId} value={c.categoryId}>{c.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-medium text-gray-700">Image URL (optional)</label>
                        <input className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-gray-400"
                               value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
                    </div>
                </div>

                <div className="mb-3">
                    <p className="text-xs font-medium text-gray-700 mb-2">Colors</p>
                    <div className="flex flex-wrap gap-2">
                        {COLORS.map((c) => (
                            <button key={c} onClick={() => toggleChip("colors", c)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-medium border transition ${
                                        form.colors.includes(c) ? "border-lime-400 bg-lime-50 text-lime-800" : "border-gray-200 text-gray-600"
                                    }`}>
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-3">
                    <p className="text-xs font-medium text-gray-700 mb-2">Sizes</p>
                    <div className="flex flex-wrap gap-2">
                        {SIZES.map((s) => (
                            <button key={s} onClick={() => toggleChip("sizes", s)}
                                    className={`w-10 h-10 rounded-full text-xs font-medium border transition ${
                                        form.sizes.includes(s) ? "border-lime-400 bg-lime-50 text-lime-800" : "border-gray-200 text-gray-600"
                                    }`}>
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                    <label className="text-xs font-medium text-gray-700">Description</label>
                    <textarea className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-gray-400 resize-none"
                              rows={3}
                              value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                </div>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
                    <button onClick={handleSubmit} disabled={loading}
                            className="px-5 py-2 rounded-full bg-lime-400 hover:bg-lime-300 text-sm font-semibold text-gray-900 disabled:opacity-50">
                        {loading ? "Updating..." : "Save changes"}
                    </button>
                </div>
            </div>
        </div>
    );
}