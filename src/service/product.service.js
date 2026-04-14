
import headerToken from "./../lib/headerToken";

export async function getAllProductService() {
    const headers = await headerToken();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    console.log("BASE URL:", baseUrl);

    const res = await fetch(`${baseUrl}/products`, {
        headers,
    });

    const products = await res.json();
    return products;
}