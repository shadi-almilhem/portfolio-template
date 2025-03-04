import content from "@/app/content/content.json";

interface SkillProps {
  name: string;
  isVisible: boolean;
  index: number;
}

const Skill = ({ name, isVisible, index }: SkillProps) => {
  return (
    <div
      className={`aspect-square flex items-center justify-center p-4 transition-all duration-300
        ${
          isVisible
            ? "bg-zinc-50 shadow-[0px_0px_0px_1px_#d4d4d8] dark:shadow-[0px_0px_0px_1px_#3f3f46] text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
            : "bg-white dark:bg-zinc-900"
        }`}
    >
      {isVisible && (
        <div className="text-center">
          <span className="block text-2xl font-bold">{name}</span>
          <span className="mt-2 block text-sm text-zinc-500 dark:text-zinc-400">
            0{index + 1}
          </span>
        </div>
      )}
    </div>
  );
};

export default function SkillsSection() {
  // List of skills
  const skills = content.skills;

  return (
    <section className="py-20 border-t border-zinc-100 dark:border-zinc-800">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
        My Skills
      </h2>

      {/* Desktop grid - 2 rows x 4 columns */}
      <div className="hidden md:grid gap-[1px] grid-cols-4">
        {Array.from({ length: skills.length * 2 }).map((_, index) => {
          const skillIndex = Math.floor(index / 2);
          return (
            <Skill
              key={index}
              name={skills[skillIndex % skills.length]}
              isVisible={(index + Math.floor(index / 4)) % 2 === 0}
              index={skillIndex % skills.length}
            />
          );
        })}
      </div>

      {/* Tablet grid - 4 rows x 2 columns */}
      <div className="grid md:hidden gap-[1px] grid-cols-2">
        {Array.from({ length: skills.length * 2 }).map((_, index) => {
          const skillIndex = Math.floor(index / 2);
          return (
            <Skill
              key={index}
              name={skills[skillIndex % skills.length]}
              isVisible={(index + Math.floor(index / 2)) % 2 === 0}
              index={skillIndex % skills.length}
            />
          );
        })}
      </div>
    </section>
  );
}
