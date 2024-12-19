import { Fira_Code } from "next/font/google";
import Link from "next/link";

const navItens = [
  {
    name: "home",
    href: "/"
  },
  {
    name: "works",
    href: "/works"
  },
  {
    name: "about-me",
    href: "/about"
  },
  {
    name: "contacts",
    href: "/contacts"
  }
];

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap"
});

const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-16 flex flex-row items-center">
      <div className="w-1/2 h-full justify-start flex items-center">
        <Link href="/">
          <h1
            className={`font-bold text-4xl before:content-['<'] before:text-[#C778DD] after:text-[#C778DD] after:content-['/>'] text-white ${firaCode.className}`}
          >
            FOLLI
          </h1>
        </Link>
      </div>
      <div className="w-1/2 h-full justify-end flex items-center">
        <div className={`w-full gap-4 flex flex-row justify-end ${firaCode.className}`}>
          <ul className="gap-8 flex justify-end font-medium  ">
            {navItens.map(item => {
              return (
                <li key={item.name} className="cursor-pointer list-none">
                  <Link
                    href={item.href}
                    className="before:content-['#'] before: before:text-[#C778DD] text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="font-bold text-white cursor-pointer">EA</div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
