"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { deleteCategory } from "@/lib/actions/category.action";

interface DeleteCategoryProps {
  id: string;
}

const DeleteCategory = (props: DeleteCategoryProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const path = usePathname();
  const { id } = props;
  const handleDelete = async () => {
    try {
      setIsSubmitting(true);
      await deleteCategory({ id, path });
    } catch (error) {
      console.log(error, " :: ");
    } finally {
      setIsSubmitting(false)
    }
  };
  return (
    <Button disabled={isSubmitting} variant={"destructive"} onClick={handleDelete}>
      {isSubmitting ?
        <Loader2 className="animate-spin h-4 w-4" />
        :
        <Trash2 className="h-4 w-4" />
      }
    </Button>
  );
};

export default DeleteCategory;
