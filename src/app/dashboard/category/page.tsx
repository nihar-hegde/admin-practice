import AddCategoryForm from '@/components/forms/AddCategoryForm'
import { getAllCategory } from '@/lib/actions/category.action'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DeleteCategory from '@/components/DeleteCategory'


const Page = async () => {
  const allCategories = await getAllCategory();
  return (
    <div className='flex flex-col items-center justify-center'>
      <AddCategoryForm />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Category</TableHead>
            <TableHead >Update</TableHead>
            <TableHead >Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            allCategories?.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>Update</TableCell>
                <TableCell ><DeleteCategory id={item.id} /></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

    </div>
  )
}

export default Page
