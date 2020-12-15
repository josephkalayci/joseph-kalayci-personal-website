import nosmarket1 from '../assets/images/nosmarket.png';
import nosmarket2 from '../assets/images/nosmarket2.png';
import nosmarket3 from '../assets/images/nosmarket3.png';
import nosmarketMobile1 from '../assets/images/nosmarketMobile.png';
import nosmarketMobile2 from '../assets/images/nosmarketMobile2.png';
import nosmarketMobile3 from '../assets/images/nosmarketMobile3.png';
import personalWebpage1 from '../assets/images/personalWebpage.png';
import personalWebpage2 from '../assets/images/personalWebpage2.png';
import ctfcWelcomeCenter1 from '../assets/images/ctfcWelcomeCenter.png';
import ctfcWelcomeCenter2 from '../assets/images/ctfcWelcomeCenter2.png';
import ctfcWelcomeCenter3 from '../assets/images/ctfcWelcomeCenter3.png';
import ctfcWelcomeCenter4 from '../assets/images/ctfcWelcomeCenter4.png';
import ctfcWelcomeCenter5 from '../assets/images/ctfcWelcomeCenter5.png';
export const profile = {
  name: 'Joseph Y.',
  surname: 'Kalayci',
  email: 'joseph.kalayci@gmail.com',
  githubUrl: 'https://github.com/josephkalayci',
  linkedInUrl: 'https://www.linkedin.com/in/joseph-kalayci',
  youtubeUrl: 'https://www.youtube.com/channel/UCOdWKpmVAfkcTDdfy0sjWFQ',
  skills: [
    { name: 'Javascript', rate: '90' },
    { name: 'React Native', rate: '90' },
    { name: 'React.js', rate: '80' },
    { name: 'Redux', rate: '70' },
    { name: 'Node.js', rate: '60' },
    { name: 'NoSql', rate: '70' },
    { name: 'Firebase', rate: '70' },
    { name: 'HTML', rate: '90' },
    { name: 'CSS', rate: '80' },
    { name: 'UI Design', rate: '50' },
  ],
  portfolio: [
    {
      title: 'Nos Market',
      description:
        'Nos Market is an online grocery store with a wide range of products. A Wordpress hosted site written in PHP and Javascript with Woocommerce Integration.',
      githubUrl: '',
      liveUrl: 'https://nosmarket.ca/',
      images: [nosmarket1, nosmarket2, nosmarket3],
      tech: 'Javascript / HTML / CSS / Wordpress',
    },
    {
      title: 'Nos Market Mobile App',
      description: `A React Native app with its Node.js backend. 
      While Nos MArket mobile application provides users with a unique mobile shopping experience, it offers fast, secure, and multiple payment channels, including Apple Pay and Android Pay.
      
      Techs: Redux, Formik, Axios, Socket-io,
      Backend: Node.js, Express.js, MangoDb, Redis
      Integrations: WooCommerce, Squareup Payment`,
      githubUrl:
        'https://github.com/josephkalayci/nos-market-mobile-app-public',
      images: [nosmarketMobile1, nosmarketMobile2, nosmarketMobile3],
      tech: 'React Native / Redux / Node.js',
    },
    {
      title: 'My Personal Webpage',
      description:
        'This is my personal webpage hosted on firebase. It is Wcag 2.1 compliant and build with Javascript, React.js, and Material UI. Also, it uses firebase cloud functions and nodemailer to receive contact messages and respond with a confirmation email.',
      githubUrl:
        'https://github.com/josephkalayci/joseph-kalayci-personal-website',
      liveUrl: '',
      images: [personalWebpage1, personalWebpage2],
      tech: 'React.js / Material UI / Firebase',
    },
    {
      title: 'CTFC Welcome Center',
      description: `Non-profit project. This blog intends to give information about necessary services for Turkish Newcomers both in English and Turkish Languages like accommodation, getting a driver's license, etc. It is written with React.js, Redux, Material UI, and It has an admin panel with role-based authentication.`,
      githubUrl: '',
      liveUrl: 'https://ctfc-toronto.web.app/',
      images: [
        ctfcWelcomeCenter1,
        ctfcWelcomeCenter3,
        ctfcWelcomeCenter4,
        ctfcWelcomeCenter2,
        ctfcWelcomeCenter5,
      ],
      tech: 'React.js / Material UI / Firebase',
    },
  ],
};
