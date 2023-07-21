import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <Link className="flex items-center p-4" href={"/"}>
      <Image src={Logo} width={50} height={50} alt="Anime Top logo" />
      <h1 className="text-4xl font-bold ml-4">Anime Top</h1>
    </Link>
  );
};
