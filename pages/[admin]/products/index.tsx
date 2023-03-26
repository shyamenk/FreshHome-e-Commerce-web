import React, {ReactElement} from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm, SubmitHandler} from 'react-hook-form'
import AdminLayout from '@/components/layout/AdminLayout'
import FormInput from '@/components/shared/FormInput'
import {z} from 'zod'

const ProductSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  category: z.string().min(1),
  imageURL: z.string().url(),
  price: z.coerce.number().min(1).nonnegative(),
  quantity: z.coerce.number().min(1).nonnegative(),
  discount: z.coerce.number().min(1).nonnegative(),
})

export type ProductSchemaType = z.infer<typeof ProductSchema>

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm<ProductSchemaType>({resolver: zodResolver(ProductSchema)})

  const onSubmit: SubmitHandler<ProductSchemaType> = async data => {
    try {
      const response = await fetch(`http://localhost:3000/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.status === 200) {
        reset()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto space-y-12 "
      >
        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-primary">
          <h1 className="text-2xl font-medium">Add Products</h1>

          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-2">
              <FormInput
                label="Name"
                name="name"
                type="text"
                register={register}
                isSubmitting={isSubmitting}
              />
              {errors?.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="col-span-full sm:col-span-2">
              <FormInput
                name="description"
                label="Description"
                type="text"
                register={register}
                isSubmitting={isSubmitting}
              />
              {errors?.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description?.message}
                </p>
              )}
            </div>

            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Category
              </label>
              <select
                {...register('category', {
                  required: 'Email Address is required',
                })}
                className='className="block w-full px-3 py-2 text-sm text-gray-700 border rounded shadow appearance-none bg-gray-50 focus:outline-none focus:shadow-outline'
              >
                <option value="" disabled>
                  Choose One
                </option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Snacks">Snacks</option>
                <option value="Beverages">Beverages</option>
              </select>
              {errors?.category && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.category?.message}
                </p>
              )}
            </div>

            <div className="col-span-full sm:col-span-2">
              <FormInput
                name="imageURL"
                label="ImageURL"
                type="text"
                register={register}
                isSubmitting={isSubmitting}
              />
              {errors?.imageURL && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.imageURL?.message}
                </p>
              )}
            </div>

            <div className="col-span-full sm:col-span-1">
              <FormInput
                name="price"
                label="Price"
                type="number"
                register={register}
                isSubmitting={isSubmitting}
              />
              {errors?.price && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.price?.message}
                </p>
              )}
            </div>

            <div className="col-span-full sm:col-span-1">
              <FormInput
                name="quantity"
                label="Quantity"
                type="number"
                register={register}
                isSubmitting={isSubmitting}
              />
              {errors?.quantity && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.quantity?.message}
                </p>
              )}
            </div>

            <div className="col-span-full sm:col-span-1">
              <FormInput
                name="discount"
                label="Discount"
                type="number"
                register={register}
                isSubmitting={isSubmitting}
              />
              {errors?.discount && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.discount?.message}
                </p>
              )}
            </div>

            <div className="mx-auto col-span-full sm:col-span-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-64 px-4 py-2 font-bold text-white bg-red-700 rounded hover:bg-red-500 focus:outline-none focus:shadow-lg disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                Add Product
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default AddProduct
AddProduct.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <>{page}</>
    </AdminLayout>
  )
}
