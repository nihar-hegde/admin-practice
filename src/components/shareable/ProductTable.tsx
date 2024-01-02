import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteButton from "../DeleteButton";
import Link from "next/link";
import { Pencil } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string[];
}
interface productProps {
  productsProps: Product[];
}

const ProductTable = ({ productsProps }: productProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Upldate</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productsProps.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.title}</TableCell>
            <TableCell className="line-clamp-1">
              {product.description}
            </TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>
              <Link href={`/dashboard/products/${product.id}/update`}>
                <Pencil className="h-4 w-4" />
              </Link>
            </TableCell>
            <TableCell>
              <DeleteButton id={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
