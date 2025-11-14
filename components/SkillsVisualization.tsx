'use client';

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

interface SkillsVisualizationProps {
  skills: Skill[];
}

export default function SkillsVisualization({ skills }: SkillsVisualizationProps) {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categorySkills = skills.filter((skill) => skill.category === category);
        return (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
              {category}
            </h3>
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

