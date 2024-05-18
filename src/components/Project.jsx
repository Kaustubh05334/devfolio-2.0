import './text.css';
import { PROJECTS } from '../constants';
import { TbBrandDjango } from 'react-icons/tb';
import { RiReactjsLine } from 'react-icons/ri';
import { AiOutlinePython } from 'react-icons/ai';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiGoogletranslate } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiSqlite } from 'react-icons/si';
import { motion } from 'framer-motion';
export const iconMap = {
  postgresql: <BiLogoPostgresql />,
  reactjs: <RiReactjsLine />,
  django: <TbBrandDjango />,
  python: <AiOutlinePython />,
  gtts: <SiGoogletranslate />,
  tailwind: <RiTailwindCssFill />,
  sqlite: <SiSqlite />,
};
const Test = ({ pic, title, desc, arr, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={pic} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
          <div className="flex flex-wrap gap-4">
            {arr.map((tech, idx) => (
              <span key={idx} className="pt-1 text-3xl">
                {iconMap[tech.toLowerCase()] || tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <motion.div
        className="mb-8 flex flex-wrap items-center justify-center gap-4 lg:gap-8 items-stretch lg:h-1/2"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {PROJECTS.map((pro, index) => (
          <Test
            key={index}
            pic={pro.image}
            title={pro.title}
            desc={pro.description}
            arr={pro.technologies}
            link={pro.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
