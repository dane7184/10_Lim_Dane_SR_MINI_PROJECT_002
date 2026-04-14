import { NextResponse } from "next/server";
import headerToken from "../../../lib/headerToken";

export async function POST(request) {
    const body = await request.json();
    const headers = await headerToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
        return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
}