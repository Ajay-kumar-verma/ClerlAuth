import { currentUser } from "@clerk/nextjs/server";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Image } from "antd";

export default async function page() {
  const user = await currentUser();
  const { firstName, lastName, imageUrl } = user;

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
            <Image width={200} src={imageUrl} />
          {JSON.stringify({firstName, lastName})}
        </body>
      </html>
    </ClerkProvider>
  );
}
