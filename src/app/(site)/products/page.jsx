import ShopCardComponent from '../../../components/shop/ShopCardComponent'
import React from 'react'
import {auth} from "./../../../auth";
import {getAllProductService} from "./../../../service/product.service";
import {Button} from "@heroui/react";
import SidebarComponent from "../../../components/SidebarComponent";

export default async function Page() {

    const session = await auth();
    const res = await getAllProductService();
    const products = res?.payload || [];

    console.log("this is session in products page :", session);

    console.log("products", products);

    return (
        <div className="mx-auto w-full max-w-7xl py-16 lg:py-20 px-4">
            <h1 className="text-3xl font-semibold text-gray-900">Luxury beauty products</h1>
            <p className="mt-1 text-sm text-gray-500">Use the filters to narrow by price and brand.</p>

            <div className="mt-8 gap-8">
                <ShopCardComponent products={products} />
            </div>
        </div>
  )
}
