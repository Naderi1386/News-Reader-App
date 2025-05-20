import { auth } from "@/auth";

const HeaderProfile = async () => {
  const session = await auth();

  return <div>HeaderProfile</div>;
};

export default HeaderProfile;
