import Links from "./Links";
import links from "./../data/links";
import { Icon } from "@iconify/react";

function Header() {
  return (
    <div className="bg-purpleBgAlt rounded-b-lg">
      <div className="w-3/4 h-16 m-auto flex justify-between items-center">
        <h1 className="text-purpleText font-semibold text-lg">Alessio Romano</h1>
        <ul className="flex gap-20">
          {links.map((link) => (
            <Links key={link.tag} tag={link.tag} url={link.url} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
