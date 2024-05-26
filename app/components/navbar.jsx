// @flow strict
import Link from "next/link";


const links = [
  "statistics",
  "projects",
  "contributions",
  "contact",
]
function Navbar({ name }) {
  return (
    <nav className="hidden md:block sticky top-0 z-[500] bg-[#0d1224cf] ">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center opacity-0 md:opacity-100">
          <Link
            href="/"
            className=" text-primary-icon text-3xl font-bold">
            @{name}
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          {links.map(link => <li key={link}>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={`#${link}`}><div className="text-sm text-white transition-colors duration-300 hover:text-primary-icon first-letter:uppercase">{link}</div></Link>
          </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;