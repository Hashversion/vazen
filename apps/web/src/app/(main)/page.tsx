import { notFound } from "next/navigation";

// What :: Real "/" route so Next typedRoutes includes it.
// Why :: Proxy rewrites "/" to "/{code}" at runtime; this page is a fallback for direct route resolution.
export default function MainPage() {
  notFound();
}
