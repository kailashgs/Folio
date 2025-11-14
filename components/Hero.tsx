import Image from 'next/image';

interface HeroProps {
  headline: string;
  intro: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({ headline, intro, imageSrc, imageAlt = 'Profile photo' }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {intro}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/30 transform hover:scale-105 transition-transform duration-300">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">KG</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

