// app/actions/authActions.ts
"use server";

import { signIn } from "next-auth/react";

export async function handleSignIn() {
  await signIn();
}
