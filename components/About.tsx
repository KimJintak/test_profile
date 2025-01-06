export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="rounded-full w-48 h-48 mx-auto object-cover"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-600 mb-6">
              안녕하세요! 저는 프론트엔드 개발자 [달리는한국인]입니다. 
              사용자 경험을 중요시하며, 깔끔하고 효율적인 코드 작성을 지향합니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold w-24">위치:</span>
                <span>서울, 대한민국</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold w-24">경력:</span>
                <span>3년</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold w-24">관심 분야:</span>
                <span>웹 개발, UI/UX, 새로운 기술</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 