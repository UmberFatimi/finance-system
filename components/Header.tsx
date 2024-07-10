"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./ui/input";
import { Search, ShoppingBag, ShoppingBasket } from "lucide-react";

import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { IService } from "@/models/services";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<IService[]>([]);

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`/api/search?query=${query}`);
    const data = await res.json();
    setResults(data.results);
  };

  return (
    <div className="bg-violet-100 bg-opacity-50 fixed top-0 left-0 w-full  py-4 px-6 z-10 ">
      <nav>
        <div className="flex flex-row gap-10">
          <Logo />

          <div className=" flex items-center justify-center gap-1 w-[100%]">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search services..."
              className="w-full  px-4 py-2 rounded-md hover:shadow-md"
            />
            {/* </div>
                <div className=""> */}
            <Button
              onClick={handleSearch}
              variant={"outline"}
              className=" px-4 py-2 rounded-md hover:shadow-md shadow-violet-700 hover:bg-violet-200 "
              type="submit"
            >
              <Search className="text-violet-700" />
            </Button>
            <ul>
              {results.map((result) => (
                <li key={result._id}>{result.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <Link href={"/"} className=" text-xl">
              Home
            </Link>
          </div>
          <div>
            <Link href={"#"} className=" text-xl">
              <div className="gap-2 flex ">
                Cart
                <ShoppingBag className=" text-gray-500" />
                <Badge variant="outline">0</Badge>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
