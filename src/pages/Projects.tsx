import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '../components/ui/card';
import { IoIosLink } from "react-icons/io";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

import { cardProjects } from './projectsData';

const Projects: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center">
        Mis Proyectos
      </h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {cardProjects.map(({ name, img, description, repository }) => (
              <CarouselItem
                key={name}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border-gray-200 border bg-white rounded-lg overflow-hidden h-full flex flex-col">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-center mb-4">
                      {name}
                    </h3>
                    <img
                      src={img || '/src/assets/svg/placeholder.svg'}
                      alt={name}
                      className="w-full h-48 object-cover rounded-md shadow-sm mb-4"
                    />
                    <p className="text-sm text-gray-600">{description}</p>
                  </CardContent>
                  <CardContent className="mt-auto gap-2 p-4 flex justify-center">
                    <a
                      href={repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <FaGithub className="mr-2 h-5 w-5" />
                      View Repo
                    </a>
                    <a
                      href={repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <IoIosLink className="mr-2 h-5 w-5" />
                      View Link
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </>
  );
};

export default Projects;
