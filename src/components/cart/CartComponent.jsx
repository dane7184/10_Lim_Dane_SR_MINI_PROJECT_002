"use client"

import * as React from "react"

export function CartComponent() {
    // const [items, setItems] = React.useState<CartItem[]>([
    //     { id: 1, name: "Tea-Trica BHA Foam", price: 12.99, quantity: 1 },
    // ])

    // const updateQty = (id: number, delta: number) => {
    //     setItems(prev =>
    //         prev.map(item =>
    //             item.id === id
    //                 ? { ...item, quantity: Math.max(1, item.quantity + delta) }
    //                 : item
    //         )
    //     )
    // }

    // const removeItem = (id: number) => {
    //     setItems(prev => prev.filter(item => item.id !== id))
    // }

    // if (items.length === 0) {
    //     return (
    //         <p className="mt-4 text-gray-500 text-sm">Your cart is empty.</p>
    //     )
    // }

    return (
        <div className="flex flex-col gap-4 mt-4">
            {/*{items.map(item => (*/}
                <div
                    // key={item.id}
                    className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-200 flex items-center gap-6 w-full"
                >
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-20 rounded-2xl bg-gray-100 shrink-0 flex items-center justify-center border border-gray-200">
                        <span className="text-3xl">🧴</span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                        <h2 className="text-lg font-semibold text-gray-900">
                            {/*{item.name}*/}
                            items
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5">
                            {/*${item.price.toFixed(2)} */}
                            each
                        </p>
                    </div>

                    {/* Quantity + Total + Remove */}
                    <div className="flex flex-col items-end gap-3 shrink-0">
                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                            <button
                                // onClick={() => updateQty(item.id, -1)}
                                className="text-gray-500 hover:text-red-500 text-lg font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>
                            <span className="tabular-nums text-center w-6 text-sm font-semibold text-gray-900">
                {/*{item.quantity}*/}
              </span>
                            <button
                                // onClick={() => updateQty(item.id, 1)}
                                className="text-gray-500 hover:text-green-600 text-lg font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>

                        {/* Line Total */}
                        <p className="text-xl font-bold text-gray-900">
                            {/*${(item.price * item.quantity).toFixed(2)}*/}
                        </p>

                        {/* Remove */}
                        <button
                            // onClick={() => removeItem(item.id)}
                            className="text-xs text-red-500 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            {/*))}*/}
        </div>
    )
}