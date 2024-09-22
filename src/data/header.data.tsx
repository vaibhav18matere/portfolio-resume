import {
  SiBiolink,
  SiGithub,
  SiLinkedin,
  SiTwitter
} from '@icons-pack/react-simple-icons';

import { HeaderSocialLinks } from '@/types/types';

export const links: HeaderSocialLinks[] = [
  {
    displayText: 'vaibhav18matere',
    printText: 'vaibhav18matere',
    tooltip: 'See my GitHub Profile',
    href: 'https://github.com/vaibhav18matere',
    icon: <SiGithub className="w-4" />,
    display: true,
    print: true
  },
  {
    displayText: 'vaibhavmatere',
    printText: 'vaibhavmatere',
    tooltip: 'See my LinkedIn Profile',
    href: 'https://www.linkedin.com/in/vaibhavmatere/',
    icon: <SiLinkedin className="w-4" />,
    display: true,
    print: true
  },
  {
    displayText: 'vaibhav_matere',
    printText: 'vaibhav_matere',
    tooltip: 'See my Twitter Profile',
    href: 'https://x.com/vaibhav_matere',
    icon: <SiTwitter className="w-4" />,
    display: true,
    print: true
  }
  // {
  //   displayText: 'vaibhavmatere',
  //   printText: 'vaibhavmatere',
  //   tooltip: 'See my Portfolio Website',
  //   href: 'https://vaibhav-matere-portfolio-v2.vercel.app/',
  //   icon: <SiBiolink className="w-4" />,
  //   display: true,
  //   print: true
  // }
];
