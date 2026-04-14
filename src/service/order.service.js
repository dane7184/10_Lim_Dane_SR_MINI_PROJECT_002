
import headerToken from "./../lib/headerToken";
import {headers} from "next/headers";

export async function getAllOrders(){

    const header = await headerToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders`, {
        headers,
    })

    const order = await res?.json();
    return order;
}