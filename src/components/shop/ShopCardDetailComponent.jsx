"use client";

import { Card } from "@heroui/react";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShopCardDetailComponent({ product }) {
    const [quantity, setQuantity] = useState(1);

    if (!product) return <p className="text-center py-20 text-gray-500">Product not found.</p>;

    const { name, description, price, imageUrl, colors = [], sizes = [], star } = product;

    return (
        <Card className="mx-auto w-full max-w-7xl py-8 lg:py-10">
            <div className="relative flex flex-col items-center px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className="flex flex-col items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6 self-start">
                        <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-gray-800 transition-colors">Products</Link>
                        <span>/</span>
                        <span className="font-semibold text-gray-900">{name}</span>
                    </nav>

                    <div className="relative w-full rounded bg-gray-100 aspect-square overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=1000&fit=crop"
                            alt={name}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10 p-8">
                    <div className="text-left w-full">
                        <div className="flex items-center gap-3 flex-wrap py-4">
                            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                            <div className="flex text-yellow-400 text-xl">
                                {star ? "★".repeat(Math.round(star)) : "★★★★★"}
                            </div>
                        </div>

                        <div className="flex items-baseline gap-4 py-4">
                            <span className="text-3xl font-bold text-blue-600">${price}</span>
                        </div>

                        {colors.length > 0 && (
                            <div className="flex flex-col gap-2 py-4">
                                <p className="text-sm font-semibold text-gray-700">Choose a color</p>
                                <div className="flex gap-2">
                                    {colors.map((color) => (
                                        <button key={color} className="px-5 py-2 rounded-full text-sm font-medium border-2 transition-all">
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sizes */}
                        {sizes.length > 0 && (
                            <div className="flex flex-col gap-2 py-4">
                                <p className="text-sm font-semibold text-gray-700">Choose a size</p>
                                <div className="flex gap-2">
                                    {sizes.map((size) => (
                                        <button key={size} className="w-12 h-12 rounded-full text-sm font-semibold border-2 transition-all flex items-center justify-center">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <p className="text-gray-500 text-base leading-relaxed">{description}</p>

                        <div className="flex items-center gap-4 py-4">
                            <div className="flex items-center gap-4 bg-gray-100 border border-gray-200 rounded-full px-5 py-3">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-gray-500 hover:text-gray-900 text-lg font-bold">−</button>
                                <span className="font-semibold text-gray-900 w-5 text-center tabular-nums">{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className="text-gray-500 hover:text-gray-900 text-lg font-bold">+</button>
                            </div>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-full transition-colors">
                                <span>🛍️</span> Add to cart
                            </button>
                        </div>

                        <div className="border border-gray-200 rounded-2xl p-4 flex gap-3 items-start bg-gray-50">
                            <span className="text-lg mt-0.5">↩️</span>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">Free 30-day returns</p>
                                <p className="text-gray-400 text-sm mt-0.5">See return policy details in cart.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}