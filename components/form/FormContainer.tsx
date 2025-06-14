'use client'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { actionFunction } from '@/utils/type'

const initialState = { message: '' }

export const FormContainer = ({
    action,
    children,
}: {
    action: actionFunction
    children: React.ReactNode
}) => {
    const [state, formAction] = useActionState(action, initialState)

    useEffect(() => {
        if (state.message) {
            toast(state.message)
        }
    }, [state])

    return <form action={formAction}>{children}</form>
}
