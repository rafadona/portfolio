import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rafael Doná | Developer', 
  lang: 'en',
  description: 'Bem vindo ao meu portfolio', 
};

// HERO DATA
export const heroData = {
  title: 'Olá,meu nome é ',
  name: 'Rafael',
  subtitle: '',
  cta: 'aaaa11',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/rafadona', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/rafadona', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'teste1',
    info: 'teste',
    info2: '',
    url: '',
    repo: 'https://github.com/rafadona', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Vamos conversar!',
  email: 'rafa_dona@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rafael-dona/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rafadona',
    },
  ],
};

