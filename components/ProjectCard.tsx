import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  impact?: string;
  techStack: string[];
  featured?: boolean;
  highlight?: string;
}

export default function ProjectCard({
  title,
  description,
  impact,
  techStack,
  featured = false,
  highlight,
}: ProjectCardProps) {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in ${
        featured ? 'ring-4 ring-blue-500 dark:ring-blue-400 scale-105' : ''
      }`}
    >
      {featured && highlight && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-bl-lg font-bold text-sm">
          {highlight}
        </div>
      )}
      
      <div className="p-8 space-y-4">
        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${featured ? 'mt-8' : ''}`}>
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        
        {impact && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 rounded-r-lg">
            <p className="text-blue-900 dark:text-blue-200 font-semibold">
              Impact: {impact}
            </p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 pt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

