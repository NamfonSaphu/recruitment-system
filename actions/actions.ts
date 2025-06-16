'use server'
import { employeeSchema, validateWithZod } from "@/utils/schema"
import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'Error!!!'
    }
}

// getUser from Clerk
export const getAuthUser = async () => {
    const user = await currentUser();
    console.log(user);
    return user;
};

export const createEmployeeAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await getAuthUser();
        const fileUrl = formData.get("fileUrl") as string;
        if (!user) throw new Error("User not authenticated");

        const rawData = Object.fromEntries(formData);
        const validateField = validateWithZod(employeeSchema, rawData);
        console.log(validateField);
        console.log(fileUrl)

        const file = formData.get('fileUrl') as string;
        console.log(file);

        await prisma.employee.create({
            data: {
                clerkId: user.id,
                position: validateField.position,
                fullname: validateField.fullname,
                email: validateField.email,
                salary: validateField.salary,
                url: validateField.url,
                fileUrl: validateField.fileUrl,
            },
        });

        return { message: 'Apply Success!!!' }
    } catch (error) {
        return renderError(error);
    }
};


