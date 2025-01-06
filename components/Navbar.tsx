export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">내 이름</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-600">소개</a>
            <a href="#skills" className="hover:text-blue-600">스킬</a>
            <a href="#projects" className="hover:text-blue-600">프로젝트</a>
            <a href="#experience" className="hover:text-blue-600">경력</a>
            <a href="#contact" className="hover:text-blue-600">연락처</a>
          </div>
          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 