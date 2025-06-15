import Link from "next/link"
import DropdownListMenu from "./ropdownListMenu"

export default function NavbarPage() {
    return (
        <div className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex">
            <div className="container flex h-16 items-center justify-between">
                <div className="font-bold text-xl">
                    <Link href="/" className="flex items-center gap-2">
                        <span>Apply Job</span>
                    </Link>
                </div>
            </div>

            <div className="flex gap-4 flex-shrink-0">
                <DropdownListMenu />
            </div>


        </div>
    )
}