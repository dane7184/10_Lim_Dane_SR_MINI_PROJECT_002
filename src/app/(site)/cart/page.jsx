import React from 'react'
import {CartComponent} from "../../../components/cart/CartComponent";


export default function page() {
  return (
    <div className="mx-auto w-full max-w-7xl py-16 lg:py-20">
        <h1 className="text-2xl font-bold ">Your Cart</h1>
        <p>cart is store in memory for this visit - refreshing the page clears it.</p>
        <div>
            <p className="mt-8">1 product in cart</p>
            <CartComponent/>
        </div>
    </div>
  )
}
