'use client'

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { LoaderCircle } from "lucide-react"
import Link from "next/link"

type SubmitButtonProps = {
  className?: string
  text: string
  href?: string
}

export const SubmitButton = ({ className = "", text, href }: SubmitButtonProps) => {
  const { pending } = useFormStatus()

  if (href) {
    return (
      <Link href={href}>
        <Button type="button" className={`${className} capitalize`}>
          {text}
        </Button>
      </Link>
    )
  }

  return (
    <Button disabled={pending} type="submit" className={`${className} capitalize`}>
      {
        pending
          ? <LoaderCircle className="animate-spin" />
          : <p>{text}</p>
      }
    </Button>
  )
}
