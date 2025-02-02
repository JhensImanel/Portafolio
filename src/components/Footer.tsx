const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="tracking-tight bg-black select-none text-center rounded-t-3xl py-3 justify-center bottom-0 text-white text-sm items-center
      flex-col"
    >
      <span className="pl-2 pr-[3.5px] py-1.5 mt-0 font-dosis">
        &copy; {currentYear} Jhens Imanel. Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;
