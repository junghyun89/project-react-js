import { FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.github.com',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.instagram.com',
    icon: <AiFillInstagram />,
  },
  {
    id: 3,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
];
