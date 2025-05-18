import Image from "next/image";
import Link from "next/link";

interface LogoPropsType {
  type: "header" | "footer";
}

const Logo = ({ type }: LogoPropsType) => {
  if (type === "footer")
    return (
      <Link href={"/"} className=" block">
        <Image
        width={100}
        height={15}
          alt="Logo"
          src={"/images/logo-footer.svg"}
          quality={50}
          priority
        />
      </Link>
    );
  return (
    <Link href={"/"} className="w-20 h-4 relative block ">
      <Image
        fill
        className="object-cover"
        alt="Logo"
        src={"/images/logo.svg"}
        quality={50}
        priority
      />
    </Link>
  );
};

export default Logo;
