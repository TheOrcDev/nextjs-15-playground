import Link from "next/link";

import { Optimistic } from "@/components/use-optimistic";
import { Button } from "@/components/ui/button";

export default function UseOptimisticPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/">
        <Button variant="outline">Back</Button>
      </Link>
      <h1 className="text-4xl font-bold">useOptimistic</h1>
      <Optimistic />
    </div>
  );
}
