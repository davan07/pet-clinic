"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[#faf8f5] min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
          <p className="text-sm text-gray-600">
            An unexpected error occurred. Please try again or return to the main website.
          </p>
          <Button variant="primary" size="md" onClick={() => reset()}>
            Try Again
          </Button>
        </div>
      </body>
    </html>
  );
}
