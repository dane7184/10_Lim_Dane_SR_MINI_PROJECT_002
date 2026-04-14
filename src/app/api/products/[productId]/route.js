import { NextResponse } from "next/server";
import headerToken from "../../../../lib/headerToken";

export async function PUT(request, { params }) {
    const { productId } = await params;
    const body = await request.json();
    const headers = await headerToken();

    console.log("PUT productId:", productId);
    console.log("PUT body:", JSON.stringify(body, null, 2));

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${productId}`, {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    console.log("PUT STATUS:", res.status);

    const text = await res.text();
    console.log("PUT RESPONSE TEXT:", text);

    const data = text ? JSON.parse(text) : {};

    if (!res.ok) {
        return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
}

export async function DELETE(request, { params }) {
    const { productId } = await params;
    const headers = await headerToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${productId}`, {
        method: "DELETE",
        headers,
    });

    console.log("DELETE STATUS:", res.status);

    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    if (!res.ok) return NextResponse.json(data, { status: res.status });
    return NextResponse.json(data);
}