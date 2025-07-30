import { Download } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="bg-[#eff6ff] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Rohit </span> Sen
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-3">
              Jr. Software Engineer
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I design and develop responsive, user-focused applications across
              web and mobile platforms. Let’s turn your ideas into
              high-performing digital products using modern technologies.
            </p>
            {/* <a href="./test.pdf" download> */}
            <a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Download size={20} />
                More About Me
              </button>
            </a>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <div className="w-auto h-auto rounded-full bg-blue-200 flex items-center justify-center shadow-2xl shadow-blue-800/50 p-1">
              <Image
                src="/linkdinProfile.jpeg"
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
