import {
  SiAmazonec2,
  SiAmazonrds,
  SiAmazons3,
  SiAngular,
  SiApollographql,
  SiArchlinux,
  SiBootstrap,
  SiBun,
  SiCircleci,
  SiCss3,
  SiDocker,
  SiElixir,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJekyll,
  SiJenkins,
  SiJira,
  SiJoomla,
  SiJquery,
  SiLinux,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPhoenixframework,
  SiPhp,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiNodedotjs,
  SiReacthookform,
  SiReactquery,
  SiSass,
  SiSemanticuireact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
  SiExpress,
  SiRtl,
  SiJest,
  SiGithub,
  SiRedux,
  SiMaterialdesign,
  SiAntdesign,
  SiShadow,
  SiFramer,
  SiSlack,
  SiBitbucket,
  SiLinear,
  SiTrello,
  SiMicrosoftoffice,
  SiMicrosoftteams,
  SiZod,
  SiMongodb,
  SiSupabase,
  SiPostman,
  SiGooglechrome
} from '@icons-pack/react-simple-icons';

import { SkillType } from '@/types/types';
import { TechStack } from '@/types/types';

const size = 14;

export const stacks: TechStack[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        icon: (
          <SiHtml5
            color="default"
            size={size}
          />
        ),
        name: 'HTML'
      },
      {
        icon: (
          <SiCss3
            color="default"
            size={size}
          />
        ),
        name: 'CSS'
      },
      {
        icon: (
          <SiJavascript
            color="default"
            size={size}
            className="bg-gray-600"
          />
        ),
        name: 'JavaScript'
      },
      {
        icon: (
          <SiReact
            color="default"
            size={size}
          />
        ),
        name: 'React'
      },
      {
        icon: (
          <SiRedux
            color="default"
            size={size}
          />
        ),
        name: 'Redux'
      },
      {
        icon: (
          <SiTypescript
            color="default"
            size={size}
          />
        ),
        name: 'TypeScript'
      },
      {
        icon: (
          <SiNextdotjs
            color="default"
            size={size}
          />
        ),
        name: 'Next.js'
      },
      {
        icon: (
          <SiGraphql
            color="default"
            size={size}
          />
        ),
        name: 'GraphQL'
      },
      {
        icon: (
          <SiReactquery
            color="default"
            size={size}
          />
        ),
        name: 'Tanstack Query',
        tooltip: 'Tanstack Query (React Query)'
      }
    ]
  },
  {
    name: 'Backend and DataBase',
    skills: [
      {
        icon: (
          <SiExpress
            color="default"
            size={size}
          />
        ),
        name: 'Express.js'
      },
      {
        icon: (
          <SiNodedotjs
            color="default"
            size={size}
          />
        ),
        name: 'Node.js'
      },
      {
        icon: (
          <SiZod
            color="default"
            size={size}
          />
        ),
        name: 'Zod'
      },
      {
        icon: (
          <SiMysql
            color="default"
            size={size}
          />
        ),
        name: 'MySQL'
      },
      {
        icon: (
          <SiPostgresql
            color="default"
            size={size}
          />
        ),
        name: 'Postgresql'
      },
      {
        icon: (
          <SiMongodb
            color="default"
            size={size}
          />
        ),
        name: 'MongoDB'
      },
      {
        icon: (
          <SiSupabase
            color="default"
            size={size}
          />
        ),
        name: 'Supabase'
      }
    ]
  },
  {
    name: 'Styling Frameworks or Libraries',
    skills: [
      {
        icon: (
          <SiBootstrap
            color="default"
            size={size}
          />
        ),
        name: 'Bootstrap'
      },
      {
        icon: (
          <SiTailwindcss
            color="default"
            size={size}
          />
        ),
        name: 'Tailwind CSS'
      },
      {
        icon: (
          <SiMaterialdesign
            color="default"
            size={size}
          />
        ),
        name: 'Material UI'
      },
      {
        icon: (
          <SiAntdesign
            color="default"
            size={size}
          />
        ),
        name: 'ANT Design'
      },
      {
        icon: (
          <SiShadow
            color="default"
            size={size}
          />
        ),
        name: 'ShadCN'
      },
      {
        icon: (
          <SiFramer
            color="default"
            size={size}
          />
        ),
        name: 'Framer Motion'
      }
    ]
  },
  {
    name: 'CMS Development',
    skills: [
      {
        icon: (
          <SiWordpress
            color="default"
            size={size}
          />
        ),
        name: 'Wordpress'
      }
    ]
  },
  {
    name: 'Testing',
    skills: [
      {
        icon: (
          <SiJest
            color="default"
            size={size}
          />
        ),
        name: 'JEST'
      },
      {
        icon: (
          <SiRtl
            color="default"
            size={size}
          />
        ),
        name: 'React Testing Library'
      }
    ]
  },
  // {
  //   name: 'DevOps',
  //   skills: [
  //     {
  //       icon: (
  //         <SiDocker
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Docker'
  //     },
  //     {
  //       icon: (
  //         <SiNginx
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Nginx'
  //     },
  //     {
  //       icon: (
  //         <SiGithubactions
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Github Actions'
  //     },
  //     {
  //       icon: (
  //         <SiJenkins
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Jenkins'
  //     },
  //     {
  //       icon: (
  //         <SiCircleci
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Circle CI'
  //     },
  //     {
  //       icon: (
  //         <SiVercel
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Vercel'
  //     },
  //     {
  //       icon: (
  //         <SiAmazonec2
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'AWS EC2'
  //     },
  //     {
  //       icon: (
  //         <SiAmazons3
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'AWS S3'
  //     },
  //     {
  //       icon: (
  //         <SiAmazonrds
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'AWS RDS'
  //     },
  //     {
  //       icon: (
  //         <SiGnubash
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Shell Scripting'
  //     },
  //     {
  //       icon: (
  //         <SiLinux
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Linux'
  //     },
  //     {
  //       icon: (
  //         <SiArchlinux
  //           color="default"
  //           size={size}
  //         />
  //       ),
  //       name: 'Arch Linux'
  //     }
  //   ]
  // },
  {
    name: 'Other Tools I Know',
    skills: [
      {
        icon: (
          <SiJira
            color="default"
            size={size}
          />
        ),
        name: 'JIRA'
      },
      {
        icon: (
          <SiFigma
            color="default"
            size={size}
          />
        ),
        name: 'Figma'
      },
      {
        icon: (
          <SiGit
            color="default"
            size={size}
          />
        ),
        name: 'Git'
      },
      {
        icon: (
          <SiGithub
            color="default"
            size={size}
          />
        ),
        name: 'Github'
      },
      {
        icon: (
          <SiPostman
            color="default"
            size={size}
          />
        ),
        name: 'Postman'
      },
      {
        icon: (
          <SiGooglechrome
            color="default"
            size={size}
          />
        ),
        name: 'Chrome Dev Tools'
      },
      {
        icon: (
          <SiBitbucket
            color="default"
            size={size}
          />
        ),
        name: 'Bitbucket'
      },
      {
        icon: (
          <SiSlack
            color="default"
            size={size}
          />
        ),
        name: 'Slack'
      },
      {
        icon: (
          <SiLinear
            color="default"
            size={size}
          />
        ),
        name: 'Linear'
      },
      {
        icon: (
          <SiTrello
            color="default"
            size={size}
          />
        ),
        name: 'Trello'
      },
      {
        icon: (
          <SiMicrosoftteams
            color="default"
            size={size}
          />
        ),
        name: 'MS Teams'
      },
      {
        icon: (
          <SiMicrosoftoffice
            color="default"
            size={size}
          />
        ),
        name: 'MS Office'
      }
    ]
  },
  {
    name: 'Currently Learning',
    skills: [
      {
        icon: (
          <SiPrisma
            color="default"
            size={size}
          />
        ),
        name: 'Prisma'
      },
      {
        icon: (
          <SiGithubactions
            color="default"
            size={size}
          />
        ),
        name: 'CI/CD'
      }
    ]
  }
];

export const SkillTag = ({ skill }: { skill: SkillType }) => {
  return (
    <span
      className="flex cursor-pointer items-center rounded-full bg-violet-100 px-2 py-1 text-xs transition-colors duration-300 ease-in-out hover:bg-violet-200 print:text-xs md:text-sm"
      title={skill.tooltip ?? skill.name}
    >
      <span className="mr-2">{skill.icon}</span>
      <span className="text-gray-800">{skill.name}</span>
    </span>
  );
};
