import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience: React.FC = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ background: '#192232' }} />
          <TimelineConnector sx={{ background: '#192232' }} />
        </TimelineSeparator>
        <TimelineContent>

          <h3 className="text-lg font-semibold text-gray-900">
            Freelance
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            may. 2024 - actualidad
          </time>
          <ul className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-600 list-disc pl-4">
            <li>Desarrollo de <strong>landing pages, SPAs y ecommerces</strong>.</li>
            <li>Mantenimiendo de computadoras, laptops e impresoras. </li>
            <li>Optimización de software y repotenciación de hardware. </li>
          </ul>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ background: '#192232' }} />
          <TimelineConnector sx={{ background: '#192232' }} />
        </TimelineSeparator>
        <TimelineContent>
          <h3 className="text-lg font-semibold text-gray-900">
            Practicas Pre - Profesionales | CCFFAA
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            feb. - abr. (2024)
          </time>
          <ul className="text-sm text-left font-normal text-gray-500 dark:text-gray-600 list-disc sm:ml-[209px] ml-0 ">
            <li>Iterfaz que normaliza y filtra por fecha, reportes de tickets.</li>
            <li><strong>Login + JWT</strong> para un sistema de mensajería en tiempo real. <span className='mr-[2px]'></span></li>
          </ul>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ background: '#192232' }} />
          <TimelineConnector sx={{ background: '#192232' }} />
        </TimelineSeparator>
        <TimelineContent>
          <h3 className="text-lg font-semibold text-gray-900">
            Trainee [Angular] | System Sixth
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            ago. - dic. (2023)
          </time>
          <ul className="text-sm font-normal text-gray-500 dark:text-gray-600 list-disc pl-4">
            <li>Implementación de componentes, directivas, rutas y eventos.</li>
            <li><strong>Desarrollo UI</strong> de la maquetación y diseño conceptual de la base de datos.</li>
          </ul>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Experience;
