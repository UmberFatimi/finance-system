import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Link href={"/auth/signup"}>
        <Button>SignUp as Buyer</Button>
      </Link>
      <Link href={"/auth/signup"}>
        <Button>SignUp as Seller</Button>
      </Link>
    </>
  );
}
