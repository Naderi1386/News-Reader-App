import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-20 h-4 relative block md:hidden">
      <Image
        fill
        className="object-cover"
        alt="Logo"
        src={"/images/logo.svg"}
      />
    </div>
  );
};

export default Logo;
