import Hero from '@/components/Hero';
import CTAButtons from '@/components/CTAButtons';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="Building Solutions Through Code"
        intro="Developer specializing in email infrastructure and tool building. Transforming complex challenges into elegant, efficient solutions."
      />
      
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm Kailash G S, a developer with a passion for creating impactful tools and solutions. 
              From email infrastructure management to building troubleshooting assistants, I bring technical 
              expertise and a problem-solving mindset to every project.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore my projects to see how I've helped reduce support queries by 30% through intelligent 
              automation, built cross-platform solutions, and developed robust applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <CTAButtons />
      </section>
    </div>
  );
}

