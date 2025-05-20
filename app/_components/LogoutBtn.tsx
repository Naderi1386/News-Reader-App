"use client";

import { logout } from "../_lib/actions";

const LogoutBtn = () => {
  return (
    <button onClick={() => logout()} className="btn btn-sm btn-dash btn-error">
      Log Out
    </button>
  );
};

export default LogoutBtn;
