"use server"

import { revalidatePath } from "next/cache"
import prismadb from "../db/prismaDB"


export const createCategory = async (category: string) => {
  try {
    const newCategory = await prismadb.category.create({
      data: {
        category
      }
    })
    revalidatePath('/dashboard/category')

  } catch (error) {
    console.log(error, " :: create category action")

  }
}

export const getAllCategory = async () => {
  try {
    const allCategories = await prismadb.category.findMany({});
    return allCategories;

  } catch (error) {
    console.log(error, " ::getAllCategory action error")

  }
}
interface DeleteCategoryParams {
  id: string;
  path: string;
}
export const deleteCategory = async ({ id, path }: DeleteCategoryParams) => {
  try {
    const deletedCategory = await prismadb.category.delete({
      where: {
        id
      }
    })
    revalidatePath(path);
    console.log(deletedCategory)

  } catch (error) {
    console.log(error, " :: delete category action error")
  }
}
