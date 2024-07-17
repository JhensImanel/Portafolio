import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home: React.FC = () => {
  const [text] = useTypewriter({
    words: ['Front-end Developer', 'Web Designer', 'Code Lover <3'],
    loop: 0
  });

  const buttonsHome = [
    { src: '/github.svg', href: 'https://github.com/JhensImanel' },
    { src: '/linkedin.svg', href: 'https://www.linkedin.com/in/jamesimanel/' },
    { src: '/gmail.svg', href: 'mailto:u18310128@gmail.com?subject=Entrevista%20laboral' },
    { src: '/outlook.svg', href: 'mailto:jamesimanel@hotmail.com?subject=Entrevista%20laboral' },
    { src: '/whatsapp.svg', href: 'whatsapp://send?phone=936615284' },
  ];

  return (
    <div className='sm:mx-56 mx-0'>
      <div className='flex sm:justify-start justify-center'>
        <div className="relative inline-block">
          <div className='top-4 right-[11px] transform translate-x-1/2 -translate-y-1/2 rounded-full absolute p-[6px] bg-green-300 border border-green-600'></div>
          <img className="mx-auto sm:mx-0 h-28 rounded-full border-[1px] border-gray-100" src="/photo.jpg" alt="profile" />
        </div>
      </div>

      <div className='text-center sm:text-left select-none sm:mb-0 pb-4 my-5'>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">Hola, Soy <span className='text-blue-500'>Jhens Imanel</span></h2>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl flex justify-center sm:justify-start">
          <span>{text}</span>
          <Cursor cursorColor="black" />
        </h2>
      </div>

      <div className="my-5 flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
        <a href='/src/assets/pdf/CV_JhensT.pdf' download className='py-1 px-2 rounded-full bg-transparent border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white items-center text-center transition duration-500'>
          Descargar CV
        </a>
        <span className="text-center items-center text-xs font-medium px-2 pt-1.5 pb-2 rounded-full text-green-900 bg-green-300 select-none">Disponible para trabajar</span>
      </div>

      <div className="mt-4 text-gray-500 pb-6 text-pretty text-center sm:text-left px-8 sm:px-0 select-none">
        <strong>+ 6 meses de experiencia en desarrollo front-end,</strong> he tenido la oportunidad de colaborar en diversos proyectos, enfrentar y superar desafíos, cumpliendo las expectativas establecidas al resolver problemas de manera efectiva y mantenerme actualizado constantemente en las últimas tecnologías y prácticas del sector.
      </div>

      <div className='flex gap-4 justify-center sm:justify-start'>
        {buttonsHome.map(({ src, href }, index) => (
          <a key={index} className='flex gap-1.5 sm:p-2 p-1 w-auto rounded-full bg-transparent transition duration-300 border-blue-200 border-2 text-black hover:bg-blue-200' href={href} target="_blank" rel="noreferrer">
            <img className='h-6 w-6' src={src} alt="SocialButton" />
          </a>
        ))}
      </div>

    </div>
  );
};

export default Home;
