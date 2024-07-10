"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "../../components/ui/form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardTitle } from "../../components/ui/card";
import { ServiceSchema } from "@/zod/formSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export default function ServicesForm() {
  const form = useForm({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ServiceSchema>) => {
    try {
      await axios.post("/api/service", values);
      toast.success("Service added successfully!");
    } catch (error: any) {
      toast.error(error.response?.data || "An error occurred!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="flex mx-auto p-4 shadow-md my-5 text-center items-center justify-center w-96  ">
        <div className="justify-center items-center my-5">
          <Logo />
          <CardTitle
            className={cn(
              "text-3xl font-bold text-center mt-3 mb-6",
              font.className
            )}
          >
            Add Service
          </CardTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Title"
                        className="my-3 w-72 hover:shadow-md"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="my-3 hover:shadow-md rounded-md">
                    <FormControl>
                      <Textarea placeholder="Description" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Price"
                        className="my-3 hover:shadow-md"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className=" mt-7 hover:shadow-md">
                Add Service
              </Button>
            </form>
          </Form>
        </div>
      </Card>
      <ToastContainer />
    </div>
  );
}
