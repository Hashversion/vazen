"use client";

import { useEffect } from "react";
import { scan } from "react-scan";
import type { JSX } from "react";

export function ReactScan(): JSX.Element {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
}
