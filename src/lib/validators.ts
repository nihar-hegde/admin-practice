import { z } from "zod";
export const AddProductFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
  price: z.coerce.number().min(1, { message: "NUmber is required" }),
  category: z.string().min(1, {
    message: "Category is required",
  }),
  image: z
    .array(z.string())
    .min(1, "Please enter at least one image")
    .max(4, "You can upload a max of 4 images."),
});

export type AddProductType = z.infer<typeof AddProductFormSchema>;
