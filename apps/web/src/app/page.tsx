import { Button } from "@repo/ui";
import ThemeToggle from "@/components/theme-toggle";
import { WaitlistCount } from "@/components/waitlist-count";

export default function Page() {
  return (
    <>
      <header className="py-9">
        <div className="mx-auto max-w-400 px-3">
          <div className="space-y-3 text-center">
            <h1 className="font-asul text-6xl">Vazen</h1>
            <p>A strict monorepo starter to kickstart projects, ideas, and experiments.</p>
          </div>
        </div>
      </header>
      <section>
        <div className="mx-auto max-w-400 px-3">
          <div className="flex items-center justify-center gap-2">
            <Button size={"sm"} variant={"destructive"}>
              Button
            </Button>
            <ThemeToggle />
            <WaitlistCount />
          </div>
        </div>
      </section>
    </>
  );
}
