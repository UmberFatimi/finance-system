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
      router.push("/signin");
    } catch (error: any) {
      console.error(error.response?.data);
    }
  };
  return (
    <div className=" flex justify-center items-center h-full border">
      <Card className="mx-auto max-w-md p-4">
      <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
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
                    <Input placeholder="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buyer">Buyer</SelectItem>
                        <SelectItem value="seller">Seller</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button variant="custom" type="submit">Register</Button>
          </form>
        </Form>
        <CardFooter>
          <Link className="decoration-slate-900" href={"/auth/signin"}>
            Already have an account | Sign In
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
