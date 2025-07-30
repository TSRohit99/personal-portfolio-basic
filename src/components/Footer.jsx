import {
    Download,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    X,
    GraduationCap,
  } from "lucide-react";
  
  const Footer = () => {
    return (
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap size={18} />
                  <span className="text-gray-300">
                    North East University Bangladesh (CS Undergrad)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <a 
                    href="mailto:rohit@innerstudios.tech"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    rohit@innerstudios.tech
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <a 
                    href="tel:+8801704719639"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    +880 1704719639
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span className="text-gray-300">Sylhet, BD</span>
                </div>
              </div>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h3 className="hidden md:block text-xl font-semibold mb-3">Social Links</h3>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/TSRohit99/"
                  className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200 p-2 hover:bg-gray-800 rounded-lg"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohit-kumar-sen-3a010019b"
                  className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-all duration-200 p-2 hover:bg-gray-800 rounded-lg"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://www.x.com/ro_hitbro"
                  className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-all duration-200 p-2 hover:bg-gray-800 rounded-lg"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Twitter/X"
                >
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Rohit Sen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;