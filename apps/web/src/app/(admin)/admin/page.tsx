import { auth } from "@repo/auth/server";
import type { Route } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import Dashboard from "./dashboard";

async function DashboardContent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/auth/login");
  }
  if (session.user.role !== "admin") {
    // Why :: "/" only exists via the proxy rewrite to /{code}
    redirect("/" as Route);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session.user.name}</p>
      <Dashboard session={session} />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense>
      <DashboardContent />
    </Suspense>
  );
}
