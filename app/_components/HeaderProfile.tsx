import { auth } from "@/auth";
import Image from "next/image";
import LogoutBtn from "./LogoutBtn";
import LoginLink from "./LoginLink";

const HeaderProfile = async () => {
  const session = await auth();
  if (!session) return <LoginLink />;

  return (
    <div className="hidden sm:flex items-center gap-5">
      <LogoutBtn />

      <div
        className="tooltip tooltip-bottom tooltip-success capitalize"
        data-tip={`${session.user?.name}`}
      >
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
    </div>
  );
};

export default HeaderProfile;
