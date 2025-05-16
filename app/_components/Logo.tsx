import Image from "next/image";

interface LogoPropsType {
  type: "header" | "footer";
}

const Logo = ({ type }: LogoPropsType) => {
  
  return (
    <div className="w-20 h-4 relative block md:hidden">
      <Image
        fill
        className="object-cover"
        alt="Logo"
        src={"/images/logo.svg"}
        quality={50}
        priority
      />
    </div>
  );
};

export default Logo;
