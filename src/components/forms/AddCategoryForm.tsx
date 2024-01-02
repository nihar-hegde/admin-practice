"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { createCategory } from "@/lib/actions/category.action";
import { Plus } from "lucide-react";
import { startTransition, useState } from "react";

const AddCategoryForm = () => {
  const [category, setCategory] = useState("");
  const handleSubmit = async () => {
    try {
      const addCategory = await createCategory(category);
      console.log(addCategory);
      setCategory("");
    } catch (error) {
      console.log(error, " :: addcatform error");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex flex-row items-center justify-center gap-4 bg-black text-white p-3 rounded-md">
        Add new category <Plus className="h-4 w-4" />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>New Category</AlertDialogTitle>
          <AlertDialogDescription>
            <Input
              type="text"
              placeholder="Category Name"
              className="input-field mt-3"
              onChange={(e) => setCategory(e.target.value)}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleSubmit}>Add</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default AddCategoryForm;
