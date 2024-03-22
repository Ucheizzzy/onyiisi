import { Control } from 'react-hook-form'
import { ImageAsset } from 'sanity'
import { z } from 'zod'

export type BannerProps = {
  _id: string
  image: ImageAsset
}
export type CategoriesProps = {
  _id: string
  title: string
  description: string
}

export type CustomFormFieldsType = {
  name: string
  control: Control<any>
  type?: string
}

export const SignUpFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  password: z.string().min(5, 'Password must be at least 5 characters'),
})

export type SignUpFormType = z.infer<typeof SignUpFormSchema>

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, 'Password must be at least 5 characters'),
})

export type LoginFormType = z.infer<typeof LoginFormSchema>
