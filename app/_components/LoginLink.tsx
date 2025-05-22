"use client"

import Link from "next/link";

const LoginLink = () => {
  return (
    <Link href={"/login"} className="btn btn-dash btn-success">
      Log In
    </Link>
  );
}

export default LoginLink