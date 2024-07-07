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
  FormLabel,
} from "../../components/ui/form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ServiceSchema } from "@/zod/formSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="flex justify-center items-center h-full border">
      <Card className="mx-auto max-w-md p-4">
        <CardTitle className="text-3xl font-bold">Add Service</CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
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
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Price" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button variant="custom" type="submit">
              Add Service
            </Button>
          </form>
        </Form>
      </Card>
      <ToastContainer />
    </div>
  );
}
