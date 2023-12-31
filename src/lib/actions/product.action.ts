"use server";
import { revalidatePath } from "next/cache";
import prismadb from "../db/prismaDB";

export const createProduct = async (params: addProductsParam) => {
  try {
    const { title, description, price, category, image, path } = params;
    const newProduct = await prismadb.product.create({
      data: {
        title,
        description,
        price,
        category,
        image,
      },
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error, " add product action error");
  }
};

export const getAllProducts = async () => {
  try {
    const allProducts = await prismadb.product.findMany();
    return allProducts;
  } catch (error) {
    console.log(error, " :getAllProducts error");
  }
};

interface deleteProductProps {
  id: number;
  path: string;
}

export const deleteProduct = async (props: deleteProductProps) => {
  try {
    const { id, path } = props;
    const deleteProduct = await prismadb.product.delete({
      where: {
        id,
      },
    });
    revalidatePath(path);
    console.log(deleteProduct);
  } catch (error) {
    console.log(error, " ::deleteProduct action error");
  }
};

export const findProduct = async (id: number) => {
  try {
    const product = await prismadb.product.findUnique({
      where: {
        id: id,
      },
    });
    return product;
  } catch (error) {
    console.log(error, " findProducterror");
  }
};
interface updateProductParams {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string[];
  path: string;
}

export const updateProduct = async (params: updateProductParams) => {
  try {
    const { id, title, description, price, category, image, path } = params;

    const updateProduct = await prismadb.product.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        price,
        category,
        image,
      },
    });
    console.log(updateProduct, " ::UpdateProduct");
    revalidatePath(path);
  } catch (error) {
    console.log(error, ":: update prduct action error");
  }
};
