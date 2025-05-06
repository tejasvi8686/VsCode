"use client";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();
  console.log("user", user);
  return (
    <div>
      <h1>Hello World</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <div>
        {user?.emailAddresses[0].emailAddress}
       
      </div>
    </div>
    
  );
}
