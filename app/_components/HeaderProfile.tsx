import { auth } from "@/auth";
import Image from "next/image";
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
    <div className="avatar">
      <div className="mask mask-squircle w-24">
        <Image
          src={String(session.user?.image)}
          alt={`Avatar-${session.user?.name}`}
        />
      </div>
    </div>
  );
};

export default HeaderProfile;
