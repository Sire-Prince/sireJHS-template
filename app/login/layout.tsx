import { Toaster } from "@/components/ui/toaster";

// This is a simple layout for login page without admin sidebar
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  {children}
  <Toaster />
  </>;
}
