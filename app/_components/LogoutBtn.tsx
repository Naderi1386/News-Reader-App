"use client";

import { useTransition } from "react";
import { logout } from "../_lib/actions";

const LogoutBtn = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(() => {
          logout();
        });
      }}
      className="btn btn-sm btn-dash btn-error"
    >
      {isPending ? (
        <span className="loading loading-ring loading-sm"></span>
      ) : (
        "Log Out"
      )}
    </button>
  );
};

export default LogoutBtn;
