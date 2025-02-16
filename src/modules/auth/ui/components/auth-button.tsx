import { Button } from '@/components/ui/button';
import { UserCircleIcon } from 'lucide-react';
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"

const AuthButton = () => {
  return (
    <>
    <SignedIn>
      <UserButton />
    </SignedIn>
    <SignedOut>
      <SignInButton mode="modal">
    <Button
        variant="outline"
        className="px-4 py-2 texts-m font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5"
    >
        <UserCircleIcon />
        Sign in
    </Button>
    </SignInButton>
    </SignedOut>
    </>
  )
}

export default AuthButton;