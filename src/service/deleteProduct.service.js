export async function deleteProductService(productId) {
    const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
    });

    const text = await res.text();
    const result = text ? JSON.parse(text) : {};

    if (!res.ok) throw new Error(result?.message || "Failed to delete product");
    return result;
}