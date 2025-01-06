export default function Experience() {
  const experiences = [
    {
      title: "시니어 프론트엔드 개발자",
      company: "ABC 테크",
      period: "2022 - 현재",
      description: [
        "React와 TypeScript를 사용한 대규모 웹 애플리케이션 개발",
        "팀 리드로서 5명의 개발자 관리 및 멘토링",
        "성능 최적화를 통한 페이지 로딩 시간 50% 감소",
      ],
    },
    {
      title: "프론트엔드 개발자",
      company: "XYZ 소프트웨어",
      period: "2020 - 2022",
      description: [
        "Vue.js를 활용한 대시보드 시스템 개발",
        "REST API 설계 및 구현",
        "사용자 경험 개선 프로젝트 주도",
      ],
    },
  ]

  const education = [
    {
      school: "한국대학교",
      degree: "컴퓨터공학 학사",
      period: "2016 - 2020",
      description: "웹 개발 동아리 회장, 졸업 프로젝트 우수상"
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">경력 & 교육</h2>
        
        {/* 경력 섹션 */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6">경력사항</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 교육 섹션 */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">교육</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">{edu.school}</h4>
                    <p className="text-gray-600">{edu.degree}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 