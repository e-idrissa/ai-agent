import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import Link from "next/link";
import { ToggleMode } from "./toggle-mode";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <div className="flex items-center gap-4">
        <Button variant={"outline"}>Check PLans</Button>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button asChild variant={"outline"}>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
        <ToggleMode />
      </div>
    </header>
  );
};
