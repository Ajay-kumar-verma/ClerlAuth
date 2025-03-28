import { currentUser } from "@clerk/nextjs/server";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default async function page() {
  const user = await currentUser();

  return (
    <div>
      Hello {user && user.firstName}!
      <ClerkProvider>
       <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </ClerkProvider>
    </div>
  );
}
