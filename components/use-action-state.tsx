"use client";

import { useActionState } from "react";

import { addToCart } from "@/server/actions";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const ActionState = () => {
  const [message, formAction, isPending] = useActionState(addToCart, "orcdev");
  return (
    <form action={formAction} className="flex flex-col gap-4">
      <h2>Buy a product</h2>
      <Input type="hidden" name="itemID" value="1" />
      <Button type="submit">Add to Cart</Button>
      <p>{isPending ? "Loading..." : message}</p>
    </form>
  );
};
