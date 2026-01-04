"use client";

// prettier-ignore
import { scan } from "react-scan";
import { useEffect } from "react";
import type { JSX } from "react";

export function ReactScan(): JSX.Element {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
}
