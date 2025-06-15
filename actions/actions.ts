'use server'
import { employeeSchema, validateWithZod } from "@/utils/schema"
import { prisma } from '@/utils/db'
import { redirect } from "next/navigation"

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'Error!!!'
    }
}
export const createEmployeeAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(employeeSchema, rawData)
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

