import { auth } from "../../../auth";
import ProductCardComponent from "./../../../components/ProductCardComponent";
// import React, { useEffect, useState } from "react";

export default async function page() {

  return (
    <div>
      <ProductCardComponent product={products} />
    </div>
  );
}
