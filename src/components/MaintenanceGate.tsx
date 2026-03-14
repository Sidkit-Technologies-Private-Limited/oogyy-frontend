"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { APP_STATUS_URL } from "@/lib/constants";

interface StatusItem {
  project: string;
  isDown: boolean;
  message?: string;
}

export function MaintenanceGate({ children }: { children: React.ReactNode }) {
  const [isDown, setIsDown] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!APP_STATUS_URL) {
      setIsDown(false);
      return;
    }

    const check = async () => {
      try {
        const res = await fetch(APP_STATUS_URL, {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          const data: StatusItem[] = await res.json();
          const oogyy = data.find((p) => p.project === "oogyy");
          if (oogyy?.isDown) {
            setIsDown(true);
            setMessage(oogyy.message ?? "");
          } else {
            setIsDown(false);
          }
        } else {
          setIsDown(false);
        }
      } catch {
        setIsDown(false);
      }
    };

    check();
  }, []);

  if (isDown === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--primary-bg-soft)]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent" />
      </div>
    );
  }

  if (isDown) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
        <div className="max-w-md text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/oogyy_wordmark.png"
              alt="Oogyy"
              width={140}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <h1 className="font-display mb-4 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
            Website Under Maintenance
          </h1>
          <p className="mb-8 text-[var(--muted)]">
            {message || "We are currently performing maintenance. Please try again later."}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full bg-[var(--primary)] px-8 py-3 font-medium text-white transition-colors hover:bg-[var(--primary-dark)]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
