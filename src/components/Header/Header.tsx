import Logo from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { RandomAnime } from "../RandomAnime/RandomAnime"
export const Header = () => {
  return (
    <div
      className="flex flex-col sm:flex-row
      gap-2 items-center"
    >
      <Link
        className="flex items-center p-4
    hover:text-rose-700"
        href={"/"}
      >
        <Image src={Logo} width={50} height={50} alt="Anime Top logo" />
        <h1 className="text-4xl font-bold ml-4">Anime Top</h1>
      </Link>
      <RandomAnime />
    </div>
  )
}
