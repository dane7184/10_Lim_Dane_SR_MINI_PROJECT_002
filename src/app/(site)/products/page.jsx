import ShopCardComponent from '../../../components/shop/ShopCardComponent'
import React from 'react'
import {auth} from "./../../../auth";
import {getAllProductService} from "./../../../service/product.service";

export default async function Page() {

    const session = await auth();
    const res = await getAllProductService();
    const products = res?.payload || [];

    console.log("this is session in products page :", session);

    console.log("products", products);

    return (
        <div className="mx-auto w-full max-w-7xl py-16 lg:py-20">
            <ShopCardComponent products ={products}/>
        </div>
  )
}
