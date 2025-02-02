import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { buttonsHome } from './buttonsHome';

const Home: React.FC = () => {
  const [text] = useTypewriter({
    words: ['Desarrollador Front End', 'Ing. Sistemas e Informática', 'Code Lover <3'],
    loop: 0,
  });

  return (
    <div className="sm:w-[800px] container mx-auto">
      {/* Perfil */}
      <div className="flex justify-center sm:justify-start">
        <div className="relative inline-block">
          <div className="absolute top-4 right-[11px] transform translate-x-1/2 -translate-y-1/2 p-[6px] bg-green-300 border border-green-600 rounded-full" />
          <img className="h-28 rounded-full border border-gray-100" src="/src/assets/img/photo.jpg" alt="profile" />
        </div>
      </div>

      {/* Introducción */}
      <div className="tracking-tight text-center sm:text-left my-5 select-none">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Hola, soy <span className="text-blue-500">Jhens Imanel</span> 👋
        </h2>
        <h2 className="flex justify-center sm:justify-start font-bold text-2xl sm:text-3xl lg:text-4xl">
          <span>{text}</span>
          <Cursor cursorColor="black" />
        </h2>
      </div>

      {/* Botones CV */}
      <div className="my-5 flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
        <a
          href="/src/assets/pdf/resume.pdf"
          download
          className="px-3 py-[9px] text-xs font-bold border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          Descargar CV
        </a>
        <span className="text-xs font-bold px-3 py-[9px] rounded-full bg-green-300 text-green-900 select-none">
          Disponible para trabajar
        </span>
      </div>

      {/* Descripción */}
      <p className="text-gray-500 pb-6 text-left sm:text-justify px-8 sm:px-0 select-none">
        Bachiller con <strong>1 año de experiencia en desarrollo web</strong>, he colaborado en proyectos de código abierto y participado en hackatones. Tengo conocimiento en buenas prácticas de programación como{' '}
        <strong>Clean Code, Clean Architecture, Design Patterns, Performance Optimization, Accessibility, CI/CD, Testing, State Management, SOLID y Modularity.</strong>
      </p>

      {/* Botones Sociales */}
      <div className="flex gap-4 justify-center sm:justify-start">
        {buttonsHome.map(({ src, href }) => (
          <a key={src} href={href} target="_blank" rel="noreferrer" className="p-2 border-2 border-blue-200 rounded-full hover:bg-blue-200 transition">
            <img className="h-6 w-6" src={src} alt="SocialButton" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
