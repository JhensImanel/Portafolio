import type * as React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@radix-ui/react-dropdown-menu';
import { sections } from '../router';
import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center xl:px-16 py-3.5 px-4 sm:mx-auto gap-x-10">
      <span className="order-2 sm:order-1 text-xl font-bold text-white rounded-full px-3.5 py-2 bg-black">
        <Link to="/">JI</Link>
      </span>
      <nav className="order-3 sm:order-2 bg-slate-50 p-2 sm:p-3 sm:rounded-full rounded-lg ">
        <ul className="hidden sm:flex items-center gap-2">
          {sections.map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                className="px-4 py-1.5 font-medium rounded-full bg-transparent duration-300 hover:text-white hover:bg-black transition"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FiAlignJustify size={25} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-black border">
              {sections.map(({ name, to }) => (
                <Link key={to} to={to}>
                  <DropdownMenuItem>{name}</DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="order-1 sm:order-3">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
