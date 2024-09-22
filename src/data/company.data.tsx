import { cache } from 'react';
import { CompanyType } from '@/types/types';

export const getExperience = cache(async () => {
  const experience: CompanyType[] = [
    {
      id: 'leo',
      name: 'Leometric Technology',
      url: 'https://leometric.com/',
      location: 'Pune, Maharashtra, India',
      type: 'Full Time',
      startDate: '2024-08-12',
      endDate: '2023-01-10',
      roles: [
        {
          id: 'leo-fe',
          title: 'Web Application Developer',
          responsibilities: `
          - Developed a comprehensive customer portal webapp, integrating real-time data from multiple sensors, enhancing client data management.
          - Engineered real-time data dashboards, added new features, refactored and maintained responsive components, ensuring scalability
          - Collaborated with cross-functional teams to deliver 10+ feature releases and 120+ bug fixes within tight deadlines, ensuring timely product delivery and client satisfaction.
          - Led code review processes, resulting in a 30% improvement in code quality and a 20% reduction in post-release defects
          `
        }
      ]
    },
    {
      id: 'infy',
      name: 'Infosys Ltd.',
      url: 'https://www.infosys.com/',
      location: 'Mysore, Karnataka, India',
      type: 'Full Time',
      startDate: '2019-12-30',
      endDate: '2020-11-14',
      roles: [
        {
          id: 'infy-se',
          title: 'System Engineer',
          responsibilities: `
          - My role was to build responsive and visually appealing webpages, optimising it's performance and troubleshooting UI bugs.
          - I worked with different UI designs and made different webapp from scratch. Learn front end technologies along the way.
          `
        }
      ]
    }
  ];
  return experience;
});
