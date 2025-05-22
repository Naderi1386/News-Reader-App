"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LoginLink = () => {
  const pathname = usePathname();
  if (pathname === "/login") return null;
  return (
    <Link href={"/login"} className="btn btn-dash btn-success">
      Log In
    </Link>
  );
};

export default LoginLink;
