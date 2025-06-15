import { TbAlignCenter } from "react-icons/tb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdownListMenu = () => {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild >
                <Button variant="outline">
                    <TbAlignCenter />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md p-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode="modal">
                            <button>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SignUpButton mode="modal">
                            <button>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                <SignedIn>
                    <DropdownMenuItem>
                        <SignOutButton>
                            <button>Sign out</button>
                        </SignOutButton>
                    </DropdownMenuItem>
                </SignedIn>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropdownListMenu;