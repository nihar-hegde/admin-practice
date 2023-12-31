import ProductTable from "@/components/shareable/ProductTable";
import { buttonVariants } from "@/components/ui/button";
import { getAllProducts } from "@/lib/actions/product.action";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductsPage = async () => {
  const allProducts = await getAllProducts();
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        Search
        <Link href={"/dashboard/products/create"} className={buttonVariants()}>
          Add product <Plus />{" "}
        </Link>
      </div>
      {allProducts ? (
        <ProductTable productsProps={allProducts} />
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductsPage;
