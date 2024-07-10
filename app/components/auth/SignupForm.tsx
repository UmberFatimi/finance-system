"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../../components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormSchema } from "@/zod/formSchema";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Card, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
const font=Montserrat({
  weight:"700",
  subsets:["latin"]

})
export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "buyer",
    },
  });
  const router = useRouter();

  //form submission
  const onSubmit = async (values: z.infer<typeof SignupFormSchema>) => {
    try {
      await axios.post("/api/auth/signup", values);
      router.push("/auth/signin");
    } catch (error: any) {
      toast.error("Registration failed. Please try again.");
      console.error(error.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-full border text-center">
      <Card className=" mx-auto max-w-md p-4 shadow-md">
      <div className="text-center items-center my-5">

        <Logo/>
        <CardTitle className={cn("text-3xl font-bold text-center mt-3 mb-6",font.className)}>Sign Up</CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            
            <FormField
            
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="name" className="my-3 hover:shadow-md" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="email" {...field}
                    className="my-3 hover:shadow-md" />
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
                    <Input placeholder="password" 
                   className="my-3 hover:shadow-md" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
            
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="hover:shadow-md rounded-md" >
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    
                    <SelectContent >
                        <SelectItem value="buyer">Buyer</SelectItem>
                        <SelectItem value="seller">Seller</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-7">Register</Button>
          </form>
        </Form>
        </div>
        <CardFooter>
          <Link className="" href={"/auth/signin"}>
            Already have an account | <span className="text-violet-700">Sign In</span>
          </Link>
        </CardFooter>
      </Card>
      <ToastContainer />
    </div>
  );
}
