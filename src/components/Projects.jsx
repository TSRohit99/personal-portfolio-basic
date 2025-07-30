import { projects } from "@/constants/projectsData";
import { ExternalLink, Github } from "lucide-react";

 const Projects = () => {
    const getColorClasses = (color) => {
      const colorMap = {
        blue: {
          bg: "bg-blue-50",
          border: "border-blue-200",
          accent: "text-blue-600",
          button: "bg-blue-600 hover:bg-blue-700"
        },
        purple: {
          bg: "bg-purple-50",
          border: "border-purple-200",
          accent: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700"
        },
        green: {
          bg: "bg-green-50",
          border: "border-green-200",
          accent: "text-green-600",
          button: "bg-green-600 hover:bg-green-700"
        },
        orange: {
          bg: "bg-orange-50",
          border: "border-orange-200",
          accent: "text-orange-600",
          button: "bg-orange-600 hover:bg-orange-700"
        },
        indigo: {
          bg: "bg-indigo-50",
          border: "border-indigo-200",
          accent: "text-indigo-600",
          button: "bg-indigo-600 hover:bg-indigo-700"
        },
        pink: {
          bg: "bg-pink-50",
          border: "border-pink-200",
          accent: "text-pink-600",
          button: "bg-pink-600 hover:bg-pink-700"
        }
      };
      return colorMap[color] || colorMap.blue;
    };
  
    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);
  
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my expertise in blockchain, web development, and innovative tech solutions.
            </p>
          </div>
  
          {/* Featured Projects */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              {/* <Star className="w-6 h-6 text-yellow-500 mr-2" /> */}
              <h3 className="text-2xl font-bold text-gray-900">Featured Work</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => {
                const colors = getColorClasses(project.color);
                return (
                  <a 
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden block cursor-pointer`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg ${colors.button.split(' ')[0]} text-white mr-3`}>
                          {project.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
                          <span className={`text-sm font-medium ${colors.accent}`}>{project.category}</span>
                        </div>
                      </div>
                      <div className={`${colors.button} text-white p-2 rounded-lg`}>
                        {project.type === 'github' ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
  
          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => {
                const colors = getColorClasses(project.color);
                return (
                  <a 
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-102 block cursor-pointer`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg ${colors.button.split(' ')[0]} text-white mr-3`}>
                          {project.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                          <span className={`text-sm font-medium ${colors.accent}`}>{project.category}</span>
                        </div>
                      </div>
                      <div className={`${colors.button} text-white p-2 rounded-lg`}>
                        {project.type === 'github' ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs font-medium text-gray-600">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
  
          {/* GitHub Profile Link */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
              <p className="text-gray-300 mb-6">
                There are many more projects including DC bots, Node.js backend servers, and other exciting developments. 
                Check out my complete collection on GitHub!
              </p>
              <a 
                href="https://github.com/TSRohit99/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Github className="w-5 h-5" />
                Visit My GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    );
 };
  
 export default Projects;