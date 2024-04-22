import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import SearchInput from "./SearchInput"
import GenreDropdown from "./GenreDropdown"

function Header() {
  return (
      <header className="fixed w-full z-50 top-0 flex items-center justify-between p-5 bg-gradient-to-t
       from-gray-200/0 via-gray-900/25 to-gray-900">
        <Link href="/" className="mr-10">
            <Image src="/logo.png" alt="Disney Logo"
              height={100}
              width={120}
              className="cursor-pointer invert-0 dark:invert h-auto w-auto"
            />
        </Link>

        <div className="flex space-x-2">
            <GenreDropdown />
            <SearchInput />
            <ThemeToggler />
        </div>
    </header>
  )
}

export default Header