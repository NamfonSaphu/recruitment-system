import { z, ZodSchema } from 'zod'

export const employeeSchema = z.object({
  position: z.string().min(2),
  fullname: z.string().min(2),
  email: z.string().email(),
  salary: z.coerce.number().positive(),
  url: z
    .string()
    .url()
    .optional()
    .or(z.literal('').transform(() => undefined)),
  fileUrl: z
    .string()
    .optional()
    .or(z.literal('').transform(() => undefined)),
})

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        const errors = result.error?.errors.map((error) => error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}