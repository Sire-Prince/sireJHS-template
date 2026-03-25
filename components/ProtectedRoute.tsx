"use client";

export default function ProtectedRoute({ children }) {
  // For now, always render children (no protection)
  // Later implement authentication logic
  return <>{children}</>;
}
