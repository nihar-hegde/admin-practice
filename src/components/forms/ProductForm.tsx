"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddProductFormSchema, AddProductType } from "@/lib/validators";
import { createProduct, updateProduct } from "@/lib/actions/product.action";
import { usePathname, useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "../shareable/FileUploader";
import { useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import CategoryDropDown from "../CategoryDropDown";

interface updateProductParams {
  type?: "Edit";
  product?: string;
}

const ProductForm = ({ product, type }: updateProductParams) => {
  const path = usePathname();
  const router = useRouter();
  const { startUpload } = useUploadThing("imageUploader");
  const [files, setFiles] = useState<File[]>([]);

  const parsedProduct = product && JSON.parse(product || "");

  const form = useForm<z.infer<typeof AddProductFormSchema>>({
    resolver: zodResolver(AddProductFormSchema),
    defaultValues: {
      title: parsedProduct?.title || "",
      description: parsedProduct?.description || "",
      price: parseInt(parsedProduct?.price) || 0,
      category: parsedProduct?.category || "",
      image: parsedProduct?.image || [],
    },
  });

  async function onSubmit(data: AddProductType) {
    let image = data.image;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages) {
        return;
      }
      image = uploadedImages.map((image) => image.url); // Extract URLs
    }
    try {
      const { title, description, price, category } = data;
      if (type === "Edit") {
        const updateProd = await updateProduct({
          id: parsedProduct.id,
          title: title,
          description: description,
          price: price,
          category: category,
          image: image,
          path: path,
        });
        console.log(updateProd);
      } else {
        const newProduct = await createProduct({
          title: title,
          description: description,
          price: price,
          category: category,
          image: image,
          path: path,
        });
        console.log(newProduct);
      }
      form.reset();
      router.push("/dashboard/products");
    } catch (error) {
      console.log(error, " onSubmit prdocut form error");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl w-full flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Product Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl className="h-72">
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Enter the prdocut price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <CategoryDropDown
                  onChangeHandler={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product image</FormLabel>
              <FormControl>
                <FileUploader
                  onFieldChange={field.onChange}
                  imageUrls={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>{type === "Edit" ? "Editing..." : "Posting..."}</>
          ) : (
            <>{type === "Edit" ? "Edit Product" : "Add Product"}</>
          )}
        </Button>
      </form>
    </Form>
  );
};
export default ProductForm;
