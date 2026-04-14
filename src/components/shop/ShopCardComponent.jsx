import Link from "next/link";
import Image from "next/image";
import { StarRow } from "../ProductCardComponent";
import SidebarComponent from "./../SidebarComponent";

const categoryTone = {
  Skincare: "bg-sky-50 text-sky-800",
  Makeup: "bg-violet-50 text-violet-800",
  Fragrance: "bg-amber-50 text-amber-900",
  Haircare: "bg-emerald-50 text-emerald-900",
};

function badgeClass(label) {
  return categoryTone[label] ?? "bg-indigo-50 text-indigo-800";
}

const btnClass =
  "mt-2 block w-full rounded-xl border border-gray-900 bg-gray-900 py-2.5 text-center text-sm font-medium text-white transition hover:bg-gray-800";

export default function ShopCardComponent({products}) {

  console.log("products-> ", products);

  return (
      <div className="gap-6 flex justify-center items-center mt-8 p-8 mx-auto ">
        <aside className="w-52 shrink-0">
          <SidebarComponent products={products}/>
        </aside>
          <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                  <article
                      key={product.productId}
                      className="group max-w-[300px] flex-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                      <div className="relative aspect-square overflow-hidden">
                          <Image
                              src={product.image || "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=1000&fit=crop"}
                              alt={product.name}
                              fill
                              className="object-cover"
                          />
                      </div>

                      <div className="flex flex-1 flex-col gap-3 p-5">
                          <div>
                              <h3 className="font-semibold text-gray-900">
                                  {product.name}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                  {product.description}
                              </p>
                          </div>

                          <StarRow />

                          <div className="mt-auto flex justify-between items-end pt-2">
                              <p className="text-xl font-semibold text-gray-900">
                                  ${product.price}
                              </p>

                              <span
                                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${badgeClass(product.category)}`}
                              >
                {product.category}
              </span>
                          </div>

                          <Link href={`/products/${product.productId}`} className={btnClass}>
                              View Product
                          </Link>
                      </div>
                  </article>
              ))}
          </div>

      </div>
  );
}