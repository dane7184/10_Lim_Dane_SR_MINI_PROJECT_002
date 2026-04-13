import {auth} from "../auth";
import headerToken from "../lib/headerToken";

export async function getAllCategories() {
    const session = await auth();
    const headers = await headerToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`, {
        headers,
    })

    const categories = await res.json();
    return categories;
}