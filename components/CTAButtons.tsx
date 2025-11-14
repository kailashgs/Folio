import Link from 'next/link';

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
      <Link
        href="/projects"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
      >
        View Projects
      </Link>
      <Link
        href="/about"
        className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-200 text-lg"
      >
        Learn More
      </Link>
      <a
        href="#contact"
        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
      >
        Contact
      </a>
    </div>
  );
}

