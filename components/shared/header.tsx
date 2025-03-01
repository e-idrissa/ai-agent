"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 flex items-center px-4 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <SignedIn>
            <Link
              href="/manage-plan"
              className="hover:bg-blue-50/50 rounded-md px-2 py-1"
            >
              <Button variant={"ghost"} className="gradient-text">
                Manage Plan
              </Button>
            </Link>
            <div className="flex items-center justify-center p-0.5 rounded-full bg-blue-50">
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={"ghost"} className="gradient-text">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          {/* <ToggleMode /> */}
        </div>
      </div>
    </header>
  );
};
