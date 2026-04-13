
"use client";

import {
    ArrowLeft,
    ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";
import { useSidebar } from "./ui/sidebar";
import { useEffect } from "react";

export default function ProductDetailComponent({ product }) {
    const { setOpen } = useSidebar();

    useEffect(() => {
        setOpen(false);
        return () => setOpen(true);
    }, []);

    console.log(product);
    return (
        <Card className="max-w-4xl w-full rounded-3xl shadow-xl overflow-hidden">
            <div className="relative flex flex-col items-center px-4 mx-auto md:flex-row sm:px-6 p-8 bg-gray-300">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded  md:p-8">
                        <div className="rounded-lg bg-white text-black w-full">
                            <img src="https://i5.walmartimages.com/seo/HOCO-Bluetooth-Over-Ear-Headphones-Hi-Fi-Stereo-Wireless-Headset-Earphone-with-Microphone-Support-TF-card-AUX-for-IOS-Android-Black_31745adc-2138-442e-b06f-c0f90501b046.4b334b93d67dfd562a34f30c38eefbda.jpeg" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <Link href={`/product`}>
                            <div className="flex items-center">
                                <ArrowLeft />
                                BACK TO PRODUCT
                            </div>
                        </Link>

                        <p className="text-cyan-700 mt-10">PREMIUM EXPERIENCE</p>
                        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                            {product.name}
                        </h2>
                        <div className="flex space-x-8 items-center mt-4">
                            <h2 className="text-3xl font-bold text-gray-800">
                                ${product.price}
                            </h2>
                            <div className="text-right">
                                <p className="text-gray-400 line-through text-sm">$1800</p>
                                <p className="text-green-600 font-semibold text-sm">
                                    SAVE 20% TODAY
                                </p>
                            </div>
                        </div>

                        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            String
                        </p>
                        <div className="mb-6">
                            <p className="mt-3 text-xs text-gray-400 mb-2">SELECT QUANTITY</p>

                            <div className="flex items-center bg-gray-100 rounded-full w-fit px-4 py-2 gap-6">
                                <button className="text-lg">-</button>
                                <span className="font-semibold">1</span>
                                <button className="text-lg">+</button>
                            </div>
                        </div>
                        <div className="mt-5 sm:flex md:mt-8">
                            <div className="rounded-md shadow">
                                <a
                                    href=""
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                                >
                                    <ShoppingCart />
                                    Add to Card
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a
                                    href=""
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
