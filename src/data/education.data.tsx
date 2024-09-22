import { cache } from 'react';
import { EducationType } from '@/types/types';

export const revalidate = 3600;

export const getEducation = cache(async () => {
  const education: EducationType[] = [
    {
      id: 1,
      name: 'Bachelor Of Engineering',
      location: 'Nashik, Maharashtra India',
      school: 'Sandip Foundations SITRC, Nashik',
      affiliation: 'Pune University',
      startDate: '2016-07-27',
      endDate: '2019-06-20',
      score: 'CGPA : 7.33'
    }
  ];
  return education;
});
