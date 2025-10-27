import { Button } from "@repo/ui";
import ThemeToggle from "@/components/theme-toggle";
import { WaitlistCount } from "@/components/waitlist-count";

export default async function Home() {
  return (
    <>
      <h1 className="text-6xl">Vazen</h1>
      <p className="font-mono-commitlint-vazen">
        A strict monorepo starter to kickstart projects, ideas, and experiments.
      </p>
      <Button>Button</Button>
      <ThemeToggle />
      <WaitlistCount />
    </>
  );
}
