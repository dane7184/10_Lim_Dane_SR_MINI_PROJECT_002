import ManageProductsClient from "./../../../components/ManageProductsClient";
import {getAllCategories} from "./../../../service/category.service";
import {getAllProductService} from "./../../../service/product.service";

export default async function page() {
    const createProduct = await getAllProductService();
    const products = createProduct?.payload || [];

    console.log("product in page manage product", products);

    const categoriesRes = await getAllCategories();
    const categories = categoriesRes?.payload || [];

    console.log("category in page manage categories", categories);

    return <ManageProductsClient initialProducts={products} categories={categories} />;
}