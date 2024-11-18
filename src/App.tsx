import React from 'react';
import { Download, BriefcaseIcon, Code2, GraduationCap, Award, UserCircle } from 'lucide-react';
import { usePDF } from 'react-to-pdf';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { SkillTag } from './components/SkillTag';

function App() {
  const { toPDF, targetRef } = usePDF({
    filename: 'john-doe-cv.pdf',
    page: { margin: 20 },
    method: 'open'
  });

  const languages = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'GraphQL'];
  const tools = ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'MongoDB'];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => toPDF()}
        className="fixed top-4 right-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download size={20} />
        Export PDF
      </button>

      <div 
        ref={targetRef} 
        className="max-w-[210mm] mx-auto bg-white shadow-lg rounded-xl overflow-hidden"
        style={{ minHeight: '297mm' }}
      >
        <div className="p-8 print:p-6">
          <Header />

          <Section title="Professional Summary" icon={<UserCircle size={24} />}>
            <p className="text-gray-600 leading-relaxed">
              Seasoned Software Engineer with 8+ years of experience in developing scalable web applications
              and microservices. Expertise in React, Node.js, and cloud technologies. Proven track record
              of leading teams and delivering high-impact projects in fast-paced environments.
            </p>
          </Section>

          <Section title="Work Experience" icon={<BriefcaseIcon size={24} />} className="break-inside-avoid">
            <div className="space-y-6">
              <ExperienceItem
                title="Senior Software Engineer"
                company="Tech Solutions Inc."
                period="2020 - Present"
                achievements={[
                  "Led a team of 6 engineers in developing a cloud-native e-commerce platform",
                  "Improved system performance by 40% through optimization and caching strategies",
                  "Implemented CI/CD pipelines reducing deployment time by 60%"
                ]}
              />
              <ExperienceItem
                title="Software Engineer"
                company="Innovation Labs"
                period="2017 - 2020"
                achievements={[
                  "Developed and maintained multiple React-based web applications",
                  "Reduced API response times by 50% through query optimization",
                  "Mentored junior developers and conducted code reviews"
                ]}
              />
            </div>
          </Section>

          <Section title="Technical Skills" icon={<Code2 size={24} />} className="break-inside-avoid">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Languages & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((skill) => (
                    <SkillTag key={skill} name={skill} variant="blue" />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((skill) => (
                    <SkillTag key={skill} name={skill} variant="green" />
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section title="Education" icon={<GraduationCap size={24} />} className="break-inside-avoid">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-medium text-gray-900">Master of Science in Computer Science</h4>
                <span className="text-blue-600 font-medium">2015 - 2017</span>
              </div>
              <p className="text-gray-600">Stanford University</p>
            </div>
          </Section>

          <Section title="Certifications" icon={<Award size={24} />} className="break-inside-avoid">
            <ul className="space-y-2 text-gray-600">
              <li>AWS Certified Solutions Architect - Professional</li>
              <li>Google Cloud Professional Cloud Architect</li>
              <li>MongoDB Certified Developer</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;