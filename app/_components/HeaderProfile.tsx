import { auth } from "@/auth";
import Link from "next/link";

const HeaderProfile = async () => {
  const session = await auth();
  if (!session)
    return (
      <Link href={"/login"} className="btn btn-dash btn-success">
        Log In
      </Link>
    );

  return (
    <div>
      <span className="block text-white text-sm">{session.user?.name}</span>
    </div>
  );
};

export default HeaderProfile;
