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
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const font = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
export default function SignInForm() {
  const form = useForm({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof SigninFormSchema>) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      if (result?.error) {
        toast.error(result.error);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred.");
    }
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
    <div className="flex justify-center items-center h-full  ">
      <Card className="mx-auto max-w-md p-4 shadow-md my-5 text-center items-center">
        <div className="text-center items-center my-5">
          <Logo />

          <CardTitle
            className={cn(
              "text-3xl font-bold text-center mt-3 mb-6",
              font.className
            )}
          >
            Sign In
          </CardTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onError)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="email"
                        {...field}
                        className="my-3 hover:shadow-md"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        className="hover:shadow-md"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full mt-7 hover:shadow-md">
                Signin
              </Button>
            </form>
          </Form>
        </div>
        <CardFooter>
          <Link className="" href={"/auth/signup"}>
            Don&apos;t have an account |
            <span className="text-violet-700">Sign Up</span>
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
