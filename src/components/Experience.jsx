import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { TbBrandDjango } from 'react-icons/tb';
import { RiReactjsLine } from 'react-icons/ri';
import { AiOutlinePython } from 'react-icons/ai';
import { BiLogoPostgresql } from 'react-icons/bi';
export const iconMap = {
  postgresql: <BiLogoPostgresql />,
  reactjs: <RiReactjsLine />,
  django: <TbBrandDjango />,
  python: <AiOutlinePython />,
};
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap gap-2 items-center justify-center lg:gap-8 items-stretch"
      >
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="w-full lg:w-[30%] mb-8 flex">
            <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-xl;">{experience.time}</p>
              </div>
              <div className="mt-4">
                <p className="text-green-400 text-3xl">$ {experience.role}</p>
                <p className="text-white text-2xl">$ {experience.company}</p>
                <p className="text-green-400 text-2xl flex flex-wrap gap-4">
                  ${' '}
                  {experience.technologies.map((tech, idx) => (
                    <span key={idx} className="pt-1">
                      {iconMap[tech.toLowerCase()] || tech}
                    </span>
                  ))}
                </p>
              </div>
            </aside>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
