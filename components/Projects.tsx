export default function Projects() {
  const projects = [
    {
      title: '프트폴리오 웹사이트',
      description: 'Next.js와 Tailwind CSS를 사용하여 제작한 반응형 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용했습니다.',
      image: '/portfolio.jpg',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.com'
    },
    {
      title: '쇼핑몰 프로젝트',
      description: 'React와 Node.js를 활용한 풀스택 이커머스 프로젝트입니다. 상품 검색, 장바구니, 결제 기능을 구현했습니다.',
      image: '/ecommerce.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/yourusername/ecommerce',
      demo: 'https://your-shop.com'
    },
    {
      title: '날씨 앱',
      description: 'OpenWeather API를 활용한 날씨 정보 애플리케이션입니다. 실시간 날씨 정보와 5일 예보를 제공합니다.',
      image: '/weather.jpg',
      tech: ['React', 'Redux', 'Weather API'],
      link: 'https://github.com/yourusername/weather-app',
      demo: 'https://your-weather.com'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 