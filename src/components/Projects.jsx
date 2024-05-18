import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
const Projects = () => {
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
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="mb-6 rounded h-[150px] w-[200px]"
                src={project.image}
                alt={project.title}
              />
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="mb-2 font-semibold"
              >
                {project.title}
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 2 }}
                className="mb-4 text-neutral-400"
              >
                {project.description}
              </motion.p>
              {project.technologies.map((tech, index) => (
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ duration: 2.5 }}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
