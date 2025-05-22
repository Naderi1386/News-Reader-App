import { Metadata } from "next";
import LoginBtn from "../_components/LoginBtn";

export const metadata: Metadata = {
  title: "Log In",
};

const page = () => {
  return (
    <div className="bg-custome-green">
      <div className="flex flex-col gap-8 items-center justify-center py-20 px-4 sm:px-0">
        <h1 className="capitalize text-white font-bold text-2xl sm:text-4xl italic text-center sm:text-left">
          log in with your google account
        </h1>
        <LoginBtn />
      </div>
    </div>
  );
};

export default page;
