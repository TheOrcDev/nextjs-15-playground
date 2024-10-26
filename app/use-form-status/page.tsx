import Link from "next/link";

import { UseFormStatus } from "@/components/use-form-status";
import { Button } from "@/components/ui/button";

export default function UseFormStatusPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/">
        <Button variant="outline">Back</Button>
      </Link>
      <h1 className="text-4xl font-bold">useFormStatus</h1>
      <UseFormStatus />
    </div>
  );
}
