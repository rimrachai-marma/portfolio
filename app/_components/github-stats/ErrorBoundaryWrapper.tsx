"use client";

import React from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ErrorFallback from "./ErrorFallback";

interface Props {
  children: React.ReactNode;
}

export const ErrorBoundaryWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary fallback={(error) => <ErrorFallback error={error} />}>
      {children}
    </ErrorBoundary>
  );
};
