import LoginBtn from "../_components/LoginBtn";


const page = () => {
  return (
    <div className="bg-custome-green">
      <div className="flex flex-col gap-8 items-center justify-center py-20">
        <h1 className="capitalize text-white font-bold text-4xl italic">
          log in with your google account
        </h1>
        <LoginBtn />
      </div>
    </div>
  );
};

export default page;
