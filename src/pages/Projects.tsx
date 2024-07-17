import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects: React.FC = () => {

  const cardProjects = [
    { name: 'Dashboard', img: 'https://i2.wp.com/colorlib.com/wp/wp-content/uploads/sites/2/veltrix-react-dashboard-template.jpg', description: 'Descripción del proyecto 1', repository: 'https://github.com/JhensImanel' },
    { name: 'Ecommerce', img: 'https://cdn.dribbble.com/userupload/11426138/file/original-2dea564e577d7b7b6e3ae054bf4e5cfa.png?resize=752x', description: 'Descripción del proyecto 2', repository: 'https://github.com/JhensImanel' },
    { name: 'Login + JWT', img: 'https://images.ctfassets.net/23aumh6u8s0i/2By8WJO48rNGEMM73U8nqd/0a96261215a52b7140983461fa88f784/new-auth0-universal-login-experience-form-angular', description: 'Descripción del proyecto 3', repository: 'https://github.com/JhensImanel' },
    { name: 'Landing Page', img: 'https://s3-alpha.figma.com/hub/file/3445859838/b926bf61-f8c8-4c37-be44-5a0c8b895dab-cover.png', description: 'Descripción del proyecto 4', repository: 'https://github.com/JhensImanel' },
    { name: 'Stack Mern', img: 'https://miro.medium.com/v2/resize:fit:1358/1*1UCjq-QVYluMIY11b1mF3w.png', description: 'Descripción del proyecto 5', repository: 'https://github.com/JhensImanel' },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='sm:mx-96 mx-2'
      >
        {cardProjects.map(({ name, img, description, repository }, index) => (
          <SwiperSlide key={index} className='mb-4'>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <div className='bg-blue-300 p-4 rounded-xl'>
                <p className="text-xl font-semibold flex justify-center underline mb-4">{name}</p>

                <div>
                  <img src={img} alt={name} className="h-60 w-auto shadow-2xl" />
                </div>

                <div className='flex flex-col items-center gap-2 '>
                  <p className="text-center mt-4">{description}</p>
                  <a href={repository} target="_blank" rel="noopener noreferrer" className='p-1.5 border-2 border-white hover:bg-white rounded-full transition duration-300'>
                    <img src="/github.svg" alt="Code Link" className="size-6" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Projects;
