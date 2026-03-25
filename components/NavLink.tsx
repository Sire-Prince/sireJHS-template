"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Define the types for the props
interface NavLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
  className?: string; // Optional: allows passing custom classes
  [key: string]: any; // Allows any other standard HTML props (...props)
}

export default function NavLink({ href, children, ...props }: NavLinkProps) {
  const pathname = usePathname();
  
  if (!href) return null;
  
  const isActive = pathname === href;
  
  // Combine your active class logic with any incoming className from props
  const combinedClassName = `${props.className || ""} ${isActive ? "active" : ""}`.trim();

  return (
    <Link href={href || "#"} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
}
