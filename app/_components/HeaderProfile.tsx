import { auth } from "@/auth";
import Image from "next/image";
import LogoutBtn from "./LogoutBtn";
import LoginLink from "./LoginLink";
import { Suspense } from "react";
import SpinnerMini from "./SpinnerMini";

const HeaderProfile = async () => {
  const session = await auth();
  if (!session) return <LoginLink />;

  return (
    <div className="flex items-center gap-5 mr-8">
      <LogoutBtn />

      <Suspense fallback={<SpinnerMini />}>
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
      </Suspense>
    </div>
  );
};

export default HeaderProfile;
