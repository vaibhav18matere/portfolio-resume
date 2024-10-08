import {
  AcademicCapIcon,
  CalendarIcon,
  MapPinIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

import Image from 'next/image';
import { formatDuration } from '@/utils/date';
import { getEducation } from '@/data/education.data';

export default async function Education() {
  const educations = await getEducation();
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Education
      </h3>
      <div className="educationlist">
        {educations.map((education) => {
          return (
            <div
              className="group mb-4 flex md:mt-6"
              key={education.id}
            >
              <div className="w-full space-y-2">
                <div>
                  <h4 className="text-sm font-medium print:text-xs">
                    {education.school} ({education.affiliation})
                  </h4>
                  <div className="mt-1 flex w-full flex-col space-y-0.5 text-sm text-gray-800 print:text-sm">
                    <div className="flex items-center">
                      <AcademicCapIcon className="mr-2 w-4" />
                      <span>{education.name}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 w-4" />
                      <time>
                        {formatDuration(education.startDate, education.endDate)}
                      </time>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 w-4" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center">
                      <PencilIcon className="mr-2 w-4" />
                      <span>{education.score}</span>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 group-last:hidden print:hidden"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
