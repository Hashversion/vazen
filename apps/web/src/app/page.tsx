import { Fragment, Suspense } from "react";
import { Button } from "@repo/ui";
import ThemeToggle from "@/components/theme-toggle";

export default async function Home() {
  return (
    <>
      <h1 className="text-6xl">Vazen</h1>
      <p className="font-mono-commitlint-vazen">
        A strict monorepo starter to kickstart projects, ideas, and experiments.
      </p>
      <Button>Button</Button>
      <ThemeToggle />

      <Suspense fallback={<p>loading...</p>}>
        <Users />
      </Suspense>
    </>
  );
}

type TUsers = {
  id: number;
  name: string;
  username: string;
  email: string;
};

async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
  const users = (await res.json()) as TUsers[];

  return (
    <div>
      {users.map((user) => (
        <Fragment key={user.id}>
          <p> {user.name}</p>
          <p> {user.username}</p>
          <p> {user.email}</p>
        </Fragment>
      ))}
    </div>
  );
}
