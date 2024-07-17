const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-[#192232] select-none text-center py-3 justify-center bottom-0 text-white text-sm items-center
      flex-col">
        <span className="pl-2 pr-[3.5px] py-1.5 mt-0 font-dosis">
          Portfolio &copy; {currentYear} · Diseñado por
        </span>
        <span className="font-victor font-semibold hover:underline pr-[1.5px]">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jamesimanel/">Jhens</a>
        </span><span>.</span>
      </div>
    </footer>
  )
}

export default Footer