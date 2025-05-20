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
    <div className="tooltip tooltip-bottom" data-tip="hello">
      <div className="avatar cursor-pointer">
        <div className="mask mask-hexagon-2 w-10 relative">
          <Image
            fill
            className="object-cover"
            src={String(session.user?.image)}
            alt={`Avatar-${session.user?.name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
