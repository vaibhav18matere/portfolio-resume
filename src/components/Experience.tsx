import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getExperience } from '@/data/company.data';

export default async function Experience() {
  const experiences = await getExperience();
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Experience
      </h3>
      <div className="experienceslist">
        {experiences.map((company) => {
          return (
            <div
              className="group mb-4 flex md:mt-6"
              key={company.id}
              id={company.id}
            >
              <div className="w-full space-y-2">
                <div>
                  <a href={company.url}>
                    <h4 className="text-sm font-medium print:text-xs">
                      {company.name}
                    </h4>
                  </a>
                  <div className="mt-1 flex w-full flex-col items-start gap-1 text-sm text-gray-500 print:flex-row print:text-sm md:flex-row md:items-center md:gap-4">
                    <div className="flex items-center">
                      <MapPinIcon className="mr-1 w-4 print:w-3" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="mr-1 w-4 print:w-3" />
                      {company.type}
                    </div>
                  </div>
                </div>
                <ol
                  role="list"
                  className="relative border-l border-gray-200"
                >
                  {company.roles.map((role) => {
                    return (
                      <li
                        className="mb-3 ml-4"
                        key={role.id}
                      >
                        <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
                        <h5 className="text-sm font-semibold text-gray-700">
                          {role.title}
                        </h5>
                        <div className="role-responsibilities">
                          <h5 className="mt-2 hidden text-sm text-gray-500 print:mt-1">
                            Responsibilities:
                          </h5>
                          <div className="prose prose-sm mt-2 max-w-none leading-snug text-gray-500 print:text-sm print:leading-tight">
                            <MDXRemote source={role.responsibilities} />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
                <div className="border-b border-gray-200 pt-4 group-last:hidden print:hidden"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
