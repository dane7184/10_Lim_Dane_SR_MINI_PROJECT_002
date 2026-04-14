import React from "react";

export default function OrderProductComponent({ orders }) {
    if (!orders || orders.length === 0) {
        return <p className="text-gray-500">No orders found.</p>;
    }

    return (
        <div className="space-y-6">
            {orders.map((order) => (
                <div
                    key={order.orderId}
                    className="border rounded-xl p-5 shadow-sm bg-white"
                >
                    {/* Order Header */}
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-sm text-gray-500">Order ID</p>
                            <p className="font-semibold text-gray-800">
                                #{order.orderId}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-sm text-gray-500">Total</p>
                            <p className="font-semibold text-green-600">
                                ${order.totalAmount}
                            </p>
                        </div>
                    </div>

                    {/* Order Date */}
                    <p className="text-sm text-gray-500 mb-4">
                        Order date:{" "}
                        {new Date(order.orderDate).toLocaleString()}
                    </p>

                    {/* Order Details */}
                    <div className="border-t pt-4 space-y-3">
                        {order.orderDetailsResponse.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center"
                            >
                                <div>
                                    <p className="font-medium text-gray-800">
                                        {item.productName}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Qty: {item.orderQty}
                                    </p>
                                </div>

                                <p className="font-semibold text-gray-700">
                                    ${item.orderTotal}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}