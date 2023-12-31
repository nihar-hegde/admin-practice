import UpdateProductForm from "@/components/forms/UpdateProduct";
import { findProduct } from "@/lib/actions/product.action";
import { privateDecrypt } from "crypto";
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
      <UpdateProductForm product={product} />
    </div>
  );
};

export default UpdateProductPage;
