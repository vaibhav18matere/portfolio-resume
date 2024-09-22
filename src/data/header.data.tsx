import { PhoneIcon } from '@heroicons/react/24/outline';
import {
  SiBiolink,
  SiGithub,
  SiLinkedin,
  SiReact,
  SiTwitter
} from '@icons-pack/react-simple-icons';

import { HeaderSocialLinks } from '@/types/types';

export const links: HeaderSocialLinks[] = [
  {
    displayText: '+91-9754945975',
    printText: '+91-9754945975',
    tooltip: 'Call me',
    href: 'tel:+919754945975',
    icon: <PhoneIcon className="w-4" />,
    display: false,
    print: true
  },
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
  },
  {
    displayText: 'vaibhavmatere',
    printText: 'vaibhavmatere',
    tooltip: 'See my Portfolio Website',
    href: 'https://vaibhav-matere-portfolio-v2.vercel.app/',
    icon: <SiBiolink className="w-4" />,
    display: true,
    print: true
  }
];
