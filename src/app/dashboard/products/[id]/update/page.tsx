import ProductForm from "@/components/forms/ProductForm";
import { findProduct } from "@/lib/actions/product.action";
import React from "react";

type Params = {
  params: {
    id: string;
  };
};

const UpdateProductPage = async ({ params: { id } }: Params) => {
  const idd = parseInt(id);
  const product = await findProduct(idd);
  if (!product) {
    return <div>No product found</div>;
  }
  return (
    <div>
      <ProductForm type="Edit" product={JSON.stringify(product)} />
    </div>
  );
};

export default UpdateProductPage;
