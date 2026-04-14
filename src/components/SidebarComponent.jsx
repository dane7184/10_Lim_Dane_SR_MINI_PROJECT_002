"use client";

import { useState, useMemo } from "react";

export default function SidebarComponent({ products }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(300);
    const [selectedCats, setSelectedCats] = useState(
        () => new Set(products.map((p) => p.category))
    );

    const categoryCounts = useMemo(() => {
        const counts = {};
        products.forEach((p) => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return counts;
    }, [products]);

    function toggleCategory(cat) {
        setSelectedCats((prev) => {
            const next = new Set(prev);
            if (next.has(cat)) {
                if (next.size > 1) next.delete(cat);
            } else {
                next.add(cat);
            }
            return next;
        });
    }

    function reset() {
        setMinPrice(0);
        setMaxPrice(300);
        setSelectedCats(new Set(products.map((p) => p.category)));
    }

    const filtered = products.filter(
        (p) => p.price >= minPrice && p.price <= maxPrice && selectedCats.has(p.category)
    );

    return (
        <div className="flex w-full gap-8 ">

            {/* ── Sidebar ── */}
            <aside className="w-52 shrink-0">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-gray-900">Filters</span>
                    <button
                        onClick={reset}
                        className="text-xs text-gray-400 hover:text-gray-700 transition"
                    >
                        Reset filters
                    </button>
                </div>

                {/* Price range — now uses the slider component */}
                {/*<div className="mb-6">*/}
                {/*    <PriceRangeSlider*/}
                {/*        min={0}*/}
                {/*        max={300}*/}
                {/*        step={5}*/}
                {/*        onChange={(lo, hi) => {*/}
                {/*            setMinPrice(lo);*/}
                {/*            setMaxPrice(hi);*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}

                {/* Categories */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                        Categories
                    </p>
                    {Object.entries(categoryCounts).map(([cat, count]) => (
                        <div
                            key={cat}
                            onClick={() => toggleCategory(cat)}
                            className={`flex justify-between items-center py-2 border-b border-gray-100
                cursor-pointer text-sm transition
                ${selectedCats.has(cat)
                                ? "text-gray-900 font-medium"
                                : "text-gray-400"
                            }`}
                        >
                            <span>{cat}</span>
                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {count}
              </span>
                        </div>
                    ))}
                </div>
            </aside>

            {/* ── Product grid ── */}
            <div className="flex-1">
                {/* ... your grid code unchanged */}
            </div>
        </div>
    );
}