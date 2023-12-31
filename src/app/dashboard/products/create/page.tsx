import AddProductForm from '@/components/forms/AddProductForm'
import React from 'react'

const CreateProduct = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>Products / Add Product</h1>
      <AddProductForm />
    </main>
  )
}

export default CreateProduct
