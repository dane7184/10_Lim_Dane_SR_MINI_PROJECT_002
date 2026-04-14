import ShopCardDetailComponent from "../../../../components/shop/ShopCardDetailComponent";
import headerToken from "./../../../../lib/headerToken";

export default async function page({ params }){

    console.log("params", params);

    const { id } = await params;

    console.log("Product Id", id);

    const headers = await headerToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`, { headers });
    const data = await res.json();
    const product = data?.payload;

    return (
        <ShopCardDetailComponent product={product} />
    );
}