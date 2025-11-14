import SkillsVisualization from '@/components/SkillsVisualization';

export default function About() {
  const skills = [
    // Programming Languages
    { name: 'Java', level: 90, category: 'Programming Languages' },
    { name: 'JavaScript', level: 85, category: 'Programming Languages' },
    { name: 'TypeScript', level: 80, category: 'Programming Languages' },
    { name: 'HTML/CSS', level: 90, category: 'Programming Languages' },
    
    // Frameworks & Libraries
    { name: 'React', level: 85, category: 'Frameworks & Libraries' },
    { name: 'Next.js', level: 80, category: 'Frameworks & Libraries' },
    { name: 'Node.js', level: 75, category: 'Frameworks & Libraries' },
    
    // Tools & Technologies
    { name: 'Email Infrastructure', level: 90, category: 'Tools & Technologies' },
    { name: 'API Development', level: 80, category: 'Tools & Technologies' },
    { name: 'Cross-Platform Development', level: 85, category: 'Tools & Technologies' },
    { name: 'Version Control (Git)', level: 85, category: 'Tools & Technologies' },
  ];

  const education = [
    {
      institution: 'Your University Name',
      degree: 'Bachelor of Science in Computer Science',
      period: '2018 - 2022',
      description: 'Relevant coursework and achievements',
    },
  ];

  const certificates = [
    {
      name: 'Certificate Name',
      issuer: 'Issuing Organization',
      date: '2023',
      description: 'Description of certification',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey from email infrastructure to tool building
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-10 bg-blue-600 dark:bg-blue-400 rounded"></span>
            My Story
          </h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              My journey in software development began with a fascination for how systems work
              behind the scenes. Starting with email infrastructure, I developed a deep understanding
              of how complex systems communicate and handle large-scale operations efficiently.
            </p>
            <p>
              Working with email infrastructure taught me the importance of reliability, scalability,
              and cross-platform compatibility. This foundation became crucial as I transitioned into
              building tools and applications that solve real-world problems.
            </p>
            <p>
              Today, I specialize in creating intelligent solutions that reduce manual work and
              improve efficiency. My troubleshooting assistant tool, which reduced support queries
              by 30%, exemplifies my commitment to building impactful solutions. I combine my
              technical expertise with a problem-solving mindset to transform challenges into
              elegant, efficient applications.
            </p>
            <p>
              From email templates that work seamlessly across platforms to scientific calculators
              demonstrating strong Java skills, each project reflects my dedication to quality,
              user experience, and technical excellence.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-10 bg-purple-600 dark:bg-purple-400 rounded"></span>
            Skills & Expertise
          </h2>
          <SkillsVisualization skills={skills} />
        </section>

        {/* Education & Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-green-600 dark:bg-green-400 rounded"></span>
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-600 dark:bg-orange-400 rounded"></span>
              Certificates
            </h2>
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">{cert.date}</p>
                  <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

