import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-4">
        <Link href="/use">
          <Button>use</Button>
        </Link>
        <Link href="/use-optimistic">
          <Button>useOptimistic</Button>
        </Link>
        <Link href="/use-action-state">
          <Button>useActionState</Button>
        </Link>
        <Link href="/use-form-status">
          <Button>useFormStatus</Button>
        </Link>
      </div>
    </div>
  );
}
