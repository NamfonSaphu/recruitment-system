'use server'
import { employeeSchema, validateWithZod } from "@/utils/schema"
import { prisma } from '@/utils/db'
import { redirect } from "next/navigation"
import { currentUser } from '@clerk/nextjs/server'

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'Error!!!'
    }
}


// getUser from Clerk
export const getAuthUser = async() => {
  const user = await currentUser()
  console.log(user)
}

export const createEmployeeAction = async (prevState: any, formData: FormData) => {
    try {
        // getAuthUser()
        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(employeeSchema, rawData)
        console.log(validateField)
        const file = formData.get('fileUrl') as string
        console.log(file)

        await prisma.employee.create({
            data: {
                position: validateField.position,
                fullname: validateField.fullname,
                email: validateField.email,
                salary: validateField.salary,
                url: validateField.url,
            },
        })
    } catch (error) {
        return renderError(error)
    }
    redirect('/apply/success')
}

