import * as React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";

const sections = [
  { name: "Inicio", to: "/" },
  { name: "Proyectos", to: "/proyectos" },
  { name: "Experiencia", to: "/experiencia" },
  { name: "Habilidades", to: "/habilidades" },
  { name: "Contacto", to: "/contacto" },
];

const Header: React.FC = () => {
  return (
    <header className="text-white bg-gradient-to-br from-green-400 to-blue-600 text-center xl:px-16 px-8 py-3.5 flex justify-between items-center shadow-lg w-full z-50">
      <span className="text-lg font-bold flex items-center gap-3">
        <Link to="/">Portfolio.</Link>
      </span>

      <ul className="hidden sm:flex items-center">
        {sections.map(({ name, to }, index) => (
          <li key={index}>
            <Link
              to={to}
              className="px-3 pt-1 pb-1.5 rounded-xl hover:bg-slate-50 bg-transparent hover:text-black"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src="/public/menu.svg" alt="iconMenu" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border rounded-xl p-1.5 text-white bg-gradient-to-br from-green-400 to-blue-600">
            {sections.map(({ name, to }, index) => (
              <Link key={index} to={to}>
                <DropdownMenuItem>
                  {name}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
