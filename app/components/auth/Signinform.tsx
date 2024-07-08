"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninFormSchema } from "@/zod/formSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Card, CardFooter, CardTitle } from "../../../components/ui/card";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const form = useForm({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof SigninFormSchema>) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      toast.error("incorrect username or password");
    }
    if (result?.url) {
      router.replace("/dashboard");
    }

    console.log(result);

    // try {
    //   const result = await signIn("credentials", {
    //     redirect: false,
    //     email: values.email,
    //     password: values.password,
    //   });
    //   if (result?.error) {
    //     toast.error(result.error);
    //   } else {
    //     router.push("/dashboard");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   toast.error("An unexpected error occurred.");
    // }
  };

  const onError = (errors: any) => {
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.password) {
      toast.error(errors.password.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-full border">
      <Card className="mx-auto max-w-md p-4">
        <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onError)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button variant="custom" type="submit">
              Signin
            </Button>
          </form>          
        </Form>
        <CardFooter>
          <Link className="decoration-slate-900" href={"/auth/signup"}>
            Don&apos;t have an account | Sign Up
          </Link>
        </CardFooter>
      </Card>
      <ToastContainer />
    </div>
  );
}

// import { signIn } from "next-auth/react"

// export default function SignInForm() {
//   return (
//     <form
//       action={async () => {
//         await signIn()
//       }}
//     >
//       <button type="submit">Sign in</button>
//     </form>
//   )
// }
