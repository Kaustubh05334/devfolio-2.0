import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';
const Navbar = () => {
  return (
    <nav className="mb-16 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center justify-between">
        <span className="mx-2 my-auto text-2xl font-bold">KB</span>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/Kaustubh05334"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kaustubh-bhargava-021634202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/Kaustubh0543/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
        <a href={`mailto:${'kaustubhbhargava5@gmail.com'}`} className="border-b">
          <SiGmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
