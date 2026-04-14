import React from 'react'
import {getAllOrders} from "./../../../service/order.service";
import OrderProductComponent from "./../../../components/OrderProductComponent";

export default async function page() {
    const showOrders = await getAllOrders();
    const orders = showOrders?.payload || [];
  return (
      <div className="mx-auto w-full max-w-7xl p-5">
          <div className="flex justify-between items-start mb-8">
              <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                      Order Products
                  </h1>
                  <p className="text-gray-500 mt-1">
                      {orders.length} order(s) from your account
                  </p>
              </div>
          </div>

          {/* Order Product Component */}
          <OrderProductComponent orders={orders} />
      </div>
  )
}
