"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";

import { submitForm } from "@/server/actions";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const UseFormStatus = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await submitForm(formData);
        ref.current?.reset();
      }}
    >
      <FormStatus />
    </form>
  );
};

export const FormStatus = () => {
  const { pending, data } = useFormStatus();

  return (
    <div className="flex flex-col gap-4">
      <h3>Request a Username: </h3>
      <Input type="text" name="username" disabled={pending} />
      <Button type="submit" disabled={pending}>
        Submit
      </Button>
      <p>{data ? `Requesting ${data?.get("username")}...` : ""}</p>
    </div>
  );
};
