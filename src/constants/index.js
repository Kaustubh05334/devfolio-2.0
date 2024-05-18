import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.png';
import project4 from '../assets/projects/project-4.webp';
export const HERO_CONTENT = `I am a versatile python, django and full stack developer with a knack for crafting robust and scalable APIs and web applications. With hands-on experience by developing and maintaining multiple sites and softwares.`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer with a passion for creating efficient and user-friendly applications. I have worked with a variety of technologies, including Django, Reeact.Js, Django Rest Framework, Python, MySQL and PostgreSQL. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    time: 'Jan 2024 - Present',
    role: 'Associate Trainee',
    company: 'KMK Consulting Inc.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    time: 'Nov 2023 - Dec 2023',
    role: 'Django Developer Intern',
    company: 'DocTunes Pvt. Ltd.',
    technologies: ['Python', 'Django', 'ReactJs'],
  },
  {
    time: 'May 2023 - July 2023',
    role: 'Full Stack Developer Intern',
    company: 'Snoffle India',
    technologies: ['Python', 'Django', 'ReactJs'],
  },
];

export const PROJECTS = [
  {
    title: 'E-Commerce Website',
    image: project1,
    description:
      'A fully functional e-commerce website with features to monitor sessions and a "no-login-cart" functionality where user can add items to cart without logging in.',
    technologies: ['Django', 'SQLite', 'Python', 'Tailwind', 'ReactJs'],
    link: 'https://github.com/Kaustubh05334/django-ecommerce-website',
  },
  {
    title: 'Virtual Voice Assistant',
    image: project2,
    description:
      'A speech recognition system achieving over 80% accuracy in converting spoken language into text executing tasks via voice commands - app launches, virtual environment creation, and preset applications.',
    technologies: ['Python', 'NLP', 'GTTS'],
    link: 'https://github.com/Kaustubh05334/voice-assistant',
  },
  {
    title: 'Blogging Platform',
    image: project4,
    description:
      'A platform for creating and publishing blog posts, with features like rich text editing, commenting, user profiles and session monitoring allowing better recomendations.',
    technologies: ['Django', 'ReactJs', 'PostgreSQL', 'Python'],
    link: 'https://github.com/Kaustubh05334/Global-Trotter',
  },
];

export const CONTACT = {
  address: 'Jaipur, Rajasthan, India ',
  phoneNo: '+91 8000997358 ',
  email: 'kaustubhbhargava5@gmail.com',
};
