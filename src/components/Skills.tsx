import { stacks } from '@/data/skills.data';
import { SkillTag } from '@/data/skills.data';

export default function Skills() {
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Skills
      </h3>
      <div className="skillslist">
        {stacks.map((stack) => {
          return (
            <>
              <h4
                className="mb-2 text-md print:mb-1 print:text-xs"
                key={stack.name}
              >
                {stack.name}
              </h4>
              <div className="mb-4 flex flex-wrap gap-2.5 print:mb-2">
                {stack.skills.map((skill) => {
                  return (
                    <SkillTag
                      skill={skill}
                      key={skill.name}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
