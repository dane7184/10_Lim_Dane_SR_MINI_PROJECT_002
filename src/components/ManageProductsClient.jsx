"use client";

import { useState } from "react";
import ManagementProductCardComponent from "./ManagementProductCardComponent";
import CreateProductModal from "./CreateProductModal";

export default function ManageProductsClient({ initialProducts, categories }) {
    const [products, setProducts] = useState(initialProducts);
    const [showModal, setShowModal] = useState(false);

    function handleCreated(newProduct) {
        setProducts((prev) => [...prev, newProduct]);
        setShowModal(false);
    }

    return (
        <div className="mx-auto w-full max-w-7xl py-16 lg:py-20">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
                    <p className="text-gray-500 mt-1">Create, update, and delete products in this demo.</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-8">
                    <h2 className="font-semibold text-gray-900">Products</h2>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-gray-900 font-semibold px-5 py-2.5 rounded-full transition">
                        + Create product
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ManagementProductCardComponent key={product.productId} product={product} />
                    ))}
                </div>
            </div>

            {showModal && (
                <CreateProductModal
                    categories={categories}
                    onClose={() => setShowModal(false)}
                    onCreated={handleCreated}
                />
            )}
        </div>
    );
}