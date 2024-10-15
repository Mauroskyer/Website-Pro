import {
  Linkedin,
  Instagram,
  HomeIcon,
  UserRound,
  BookText,
  CodeSquare,
  Speech,
  Crop,
  Computer,
  Book,
  Rocket,
  Github,
} from 'lucide-react';

export const socialNetworks = [
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: 'https://www.linkedin.com/in/mauro-arteaga-754543241/',
  },
  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: 'https://www.instagram.com/mauiarte?igsh=MXhnNTVqNTEwY2N0MA%3D%3D&utm_source=qr',
  },
  {
    id: 3,
    logo: <Github size={30} strokeWidth={1} />,
    src: 'https://github.com/Mauroskyer',
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: 'Home',
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: '/',
  },
  {
    id: 2,
    title: 'User',
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: '/about-me',
  },
  {
    id: 3,
    title: 'Book',
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: '/services',
  },
  {
    id: 4,
    title: 'Target',
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: '/portfolio',
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: 'Software Developer',
    subtitle: 'Janis',
    description:
      'Colabora con un equipo dinámico para desarrollo de mircroservicios, mantener el buen estado y procesamiento de la app.',
    date: 'Nov 2023 ',
  },
  {
    id: 2,
    title: 'Fronted Developer',
    subtitle: 'Freelancer',
    description:
      'Trabaje en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. .',
    date: 'Dic 2024',
  },
  {
    id: 3,
    title: 'Fronted and mobile developer',
    subtitle: 'No Country',
    description:
      'Como desarrollador frontend, tuve la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.',
    date: 'sep 2022',
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: 'Años de experiencia',
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 3,
    text: 'Clientes satisfechos',
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 19,
    text: 'Proyectos finalizados',
    lineRight: true,
    lineRightMobile: true,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: 'Branding',
    description:
      'Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales',
  },
  {
    icon: <Computer />,
    title: 'Desarrollo web',
    description:
      'Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades',
  },
  {
    icon: <Book />,
    title: 'Copywriting',
    description:
      'Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia',
  },
  {
    icon: <Rocket />,
    title: 'SEO',
    description:
      'Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ',
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: 'Web Pro',
    image: '/image-1.jpg',
    urlGithub: 'https://github.com/Mauroskyer/JavaScript-Proyects',
  },
  {
    id: 2,
    title: 'Cryptocurrency-Tracker',
    image: '/image-2.jpg',
    urlGithub: 'https://github.com/Mauroskyer/Cryptocurrency-Tracker',
    urlDemo: 'https://cryptocurrency-tracker1.netlify.app',
  },
  {
    id: 3,
    title: 'Banco-de-Alimentos',
    image: '/image-3.jpg',
    urlGithub: 'https://github.com/Mauroskyer/Banco-de-Alimentos',
    urlDemo: 'https://bda-balcarce.netlify.app/',
  },
  {
    id: 4,
    title: 'Login-bda-Balcarce',
    image: '/image-4.jpg',
    urlGithub: 'https://github.com/Mauroskyer/Login-bda-Balcarce',
    urlDemo: 'https://login-bda-balcarce.netlify.app/',
  },
  {
    id: 5,
    title: 'Modal',
    image: '/image-5.jpg',
    urlGithub: 'https://github.com/Mauroskyer/modal',
  },
  {
    id: 6,
    title: 'Emoji-Finder',
    image: '/image-6.jpg',
    urlGithub: 'https://github.com/Mauroskyer/Emoji-Finder',
  },
  {
    id: 7,
    title: 'Weather-Widget',
    image: '/image-7.jpg',
    urlGithub: 'https://github.com/Mauroskyer/Weather-Widget',
  },
  {
    id: 8,
    title: 'Currency-Converter',
    image: '/image-8.jpg',
    urlGithub: 'https://github.com/Mauroskyer/Currency-Converter',
    urlDemo: 'https://cryptocurrency-tracker1.netlify.app/',
  },
  {
    id: 9,
    title: 'Web 1.0',
    image: '/image-8.jpg',
    urlGithub: 'https://github.com/Mauroskyer/Currency-Converter',
    urlDemo: 'https://mauro-arteaga.netlify.app/',
  },
];
