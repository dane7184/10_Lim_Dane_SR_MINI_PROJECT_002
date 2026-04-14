export async function editProductService(productId, data) {
    const res = await fetch(`/api/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const text = await res.text();
    const result = text ? JSON.parse(text) : {};

    if (!res.ok) {
        throw new Error(result?.message || "Failed to update product");
    }

    return result;
}