import Image from "next/image";

interface LogoPropsType {
  type: "header" | "footer";
}

const Logo = ({ type }: LogoPropsType) => {
  if (type === "footer")
    return (
      <div className="w-20 h-4 relative block md:hidden">
        <Image
          fill
          className="object-cover"
          alt="Logo"
          src={"/images/logo-footer.svg"}
          quality={50}
          priority
        />
      </div>
    );
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
