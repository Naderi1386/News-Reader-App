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

  return <div>HeaderProfile</div>;
};

export default HeaderProfile;
