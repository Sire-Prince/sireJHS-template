"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, ...props }) {
  const pathname = usePathname();
  if (!href) return null;
  const isActive = pathname === href;
  return (
    <Link href={href || "#"} className={isActive ? "active" : ""} {...props}>
      {children}
    </Link>
  );
}
