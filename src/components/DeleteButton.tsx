"use client";
import React from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { deleteProduct } from "@/lib/actions/product.action";

interface DeleteButtonProps {
  id: number;
}
const DeleteButton = (props: DeleteButtonProps) => {
  const pathname = usePathname();
  const { id } = props;
  const handleOnClick = async () => {
    const productDelet = await deleteProduct({ id, path: pathname });
    console.log(productDelet);
  };
  return (
    <Button size={"sm"} variant={"destructive"} onClick={handleOnClick}>
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeleteButton;
