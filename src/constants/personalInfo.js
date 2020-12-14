import nosmarket1 from '../assets/images/nosmarket.png';
import nosmarket2 from '../assets/images/nosmarket2.png';
import nosmarket3 from '../assets/images/nosmarket3.png';
import nosmarketMobile1 from '../assets/images/nosmarketMobile.png';
import personalWebpage1 from '../assets/images/personalWebpage.png';
import personalWebpage2 from '../assets/images/personalWebpage2.png';
import ctfcWelcomeCenter1 from '../assets/images/ctfcWelcomeCenter.png';
import ctfcWelcomeCenter2 from '../assets/images/ctfcWelcomeCenter2.png';
import ctfcWelcomeCenter3 from '../assets/images/ctfcWelcomeCenter3.png';
export const profile = {
  name: 'Joseph',
  surname: 'Kalayci',
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
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      githubUrl: '',
      liveUrl: 'https://nosmarket.ca/',
      images: [nosmarket1, nosmarket2, nosmarket3],
      tech: 'Javascript / HTML / CSS / Wordpress',
    },
    {
      title: 'Nos Market Mobile App',
      description:
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      githubUrl:
        'https://github.com/josephkalayci/nos-market-mobile-app-public',
      images: [nosmarketMobile1],
      tech: 'React Native / Redux / Node.js',
    },
    {
      title: 'My Personal Webpage',
      description:
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      githubUrl:
        'https://github.com/josephkalayci/joseph-kalayci-personal-website',
      liveUrl: '',
      images: [personalWebpage1, personalWebpage2],
      tech: 'React.js / Material UI / Firebase',
    },
    {
      title: 'CTFC Welcome Center',
      description:
        'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      githubUrl: '',
      liveUrl: 'https://ctfc-toronto.web.app/',
      images: [ctfcWelcomeCenter1, ctfcWelcomeCenter2, ctfcWelcomeCenter3],
      tech: 'React.js / Material UI / Firebase',
    },
  ],
};
