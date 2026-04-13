
import React from "react";
import ProductCardComponent from "../ProductCardComponent";
import {getAllProductService} from "../../service/product.service";


export default async function LandingBestSellerSectionComponent({items, session: propSession }) {
    // const res = await getAllProductService();
    // const products = res?.payload || [];

    console.log("hello LandingBestSellerSectionComponent", items)

    const isAuth = !!propSession;
         return (
             <>
                 <section className="mx-auto w-full max-w-7xl py-16 lg:py-20">
                     <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                         <div>
                             <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                              Best selling products
                             </h2>

                             <p className="mt-2 text-gray-500">
                              Tap + to add — state syncs with your cart in the header.

                             </p>
                         </div>
                     </div>
                     {
                      isAuth ? (
                          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
                              {items.map((product) => (
                                  <ProductCardComponent product={product} key={product.productId} />
                              ))}
                          </div>
                      ) :
                          (
                              <div className="mx-auto justify-center items-center text-center mt-8 text-gray-500">
                                  <p>No best-selling products to show yet</p>
                              </div>
                          )
                  }
              </section>
          </>

  );
}
