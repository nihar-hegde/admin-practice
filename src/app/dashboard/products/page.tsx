import ProductTable from "@/components/shareable/ProductTable";
import { buttonVariants } from "@/components/ui/button";
import { getAllProducts } from "@/lib/actions/product.action";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string[];
  createdAt: string;
  updatedAt: string;
};

const ProductsPage = async () => {
  const allProducts = await getAllProducts();
  let formattedProduct: ProductType[] = [];
  if (allProducts) {
    // TypeScript knows that allProducts is not undefined here
    formattedProduct = allProducts.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price.toNumber(),
      category: item.category.category,
      image: item.image,
      createdAt: item.createdAt.toString(),
      updatedAt: item.updatedAt.toString(),
    }));
  }
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
        <ProductTable productsProps={formattedProduct} />
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductsPage;
