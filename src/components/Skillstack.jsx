import { RiReactjsLine } from 'react-icons/ri';
import { AiOutlinePython } from 'react-icons/ai';
import { TbBrandDjango } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { animate, motion } from 'framer-motion';

const iconsMove = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});
const Skillstack = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech <span className="text-neutral-500">Stack</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconsMove(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <AiOutlinePython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconsMove(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <TbBrandDjango className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconsMove(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsMove(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsMove(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconsMove(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconsMove(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsMove(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <FaGit className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconsMove(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <SiMicrosoftexcel className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconsMove(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bborder-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skillstack;
