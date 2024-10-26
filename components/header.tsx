import { ModeToggle } from "./ui/mode-toggle";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full py-3 px-5">
      <h1 className="text-2xl font-bold">Next 15.0.1</h1>
      <ModeToggle />
    </div>
  );
}
