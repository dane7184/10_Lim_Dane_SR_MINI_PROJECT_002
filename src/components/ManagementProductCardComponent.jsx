"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function StarRow({ rating }) {
    if (!rating) return (
        <p className="flex items-center gap-0.5 text-gray-300">
            <span className="text-sm">★★★★★</span>
            <span className="ml-1 text-xs tabular-nums text-gray-400">—</span>
        </p>
    );
    return (
        <p className="flex items-center gap-0.5 text-amber-400">
            <span className="text-sm">{"★".repeat(Math.round(rating))}{"☆".repeat(5 - Math.round(rating))}</span>
            <span className="ml-1 text-xs tabular-nums text-gray-500">{rating}</span>
        </p>
    );
}

export default function ManagementProductCardComponent({ product }) {
    const { productId, name, price, imageUrl, star } = product;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <article className="group relative rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">

            <div className="absolute top-3 right-3 z-10">
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-500"
                >
                    ···
                </button>
                {menuOpen && (
                    <div className="absolute right-0 mt-1 w-36 rounded-xl border border-gray-100 bg-white shadow-lg z-20">
                        <Link
                            href={`/products/${productId}/edit`}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-t-xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg> Edit
                        </Link>
                        <button
                            className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-b-xl"
                            onClick={() => {
                                setMenuOpen(false);
                                alert(`Delete ${name}?`);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                            Delete
                        </button>
                    </div>
                )}
            </div>

            <Link href={`/products/${productId}`} className="block">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src={imageUrl?.startsWith("http") ? imageUrl : "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=1000&fit=crop"}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition group-hover:scale-[1.02]"
                    />
                </div>
            </Link>

            <div className="relative mt-4 pr-10">
                <StarRow rating={star} />
                <Link href={`/products/${productId}`}>
                    <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-900 hover:text-lime-700">
                        {name}
                    </h3>
                </Link>
                <p className="mt-2 text-base font-semibold tabular-nums text-gray-900">${price}</p>
            </div>

            <div className="absolute bottom-4 right-4">
                <button className="flex items-center justify-center w-9 h-9 rounded-full bg-lime-400 hover:bg-lime-300 text-gray-900 font-bold text-lg shadow-sm transition">
                    +
                </button>
            </div>
        </article>
    );
}