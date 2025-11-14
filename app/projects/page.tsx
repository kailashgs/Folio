import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Troubleshooting Assistant Tool',
      description:
        'Developed an intelligent troubleshooting assistant that automates problem resolution and reduces support queries. The tool analyzes common issues, provides instant solutions, and streamlines the support workflow for both users and support teams.',
      impact: '30% reduction in support queries',
      techStack: ['JavaScript', 'React', 'Node.js', 'API Integration'],
      featured: true,
      highlight: '30% Impact',
    },
    {
      title: 'Scientific Calculator',
      description:
        'Built a comprehensive scientific calculator application demonstrating strong Java programming skills. The calculator includes advanced mathematical functions, trigonometric operations, logarithmic calculations, and a user-friendly interface.',
      techStack: ['Java', 'Swing/JavaFX', 'Object-Oriented Programming'],
      featured: false,
    },
    {
      title: 'Email Template Work',
      description:
        'Created responsive, cross-platform email templates that ensure consistent rendering across multiple email clients and platforms. Demonstrated expertise in HTML/CSS email development, compatibility testing, and responsive design principles.',
      techStack: ['HTML', 'CSS', 'Email Development', 'Cross-Platform Testing'],
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-blue-600 dark:bg-blue-400 rounded"></span>
            Featured Project
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <ProjectCard {...projects[0]} />
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-purple-600 dark:bg-purple-400 rounded"></span>
            Additional Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(1).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">30%</div>
              <div className="text-gray-600 dark:text-gray-300">Query Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">3+</div>
              <div className="text-gray-600 dark:text-gray-300">Key Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Cross-Platform</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

