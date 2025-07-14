import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Post-Graduate Certificate",
      field: "Applied Network Infrastructure & System Administration",
      institution: "Conestoga College",
      location: "Canada",
      period: "Jan 2024 – Apr 2025",
      type: "current",
      description: "Advanced studies in network infrastructure, system administration, and cloud technologies with hands-on lab experience."
    },
    {
      degree: "Bachelor of Engineering",
      field: "Electronics & Communications",
      institution: "Gujarat Technological University",
      location: "India",
      period: "Sep 2014 – Jun 2017",
      type: "completed",
      description: "Comprehensive foundation in electronics, communications, and engineering principles."
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "Jun 2024",
      icon: "☁️"
    },
    {
      name: "DevOps on AWS",
      issuer: "Amazon Web Services",
      date: "Jul 2024",
      icon: "⚙️"
    },
    {
      name: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "Jan 2022",
      icon: "🐧"
    }
  ];

  const leadership = [
    {
      role: "Vice President",
      organization: "Upgrade English Club",
      institution: "Conestoga College",
      period: "Aug 2024 – Apr 2025",
      achievements: [
        "Organized 10+ student engagement events and led marketing campaigns via Instagram, Discord, Slack",
        "Grew club membership by 80+ members, improving student engagement and public speaking skills"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through formal education and industry certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span>Education</span>
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      edu.type === 'current' 
                        ? 'from-blue-50 to-teal-50 border-l-4 border-blue-600' 
                        : 'from-gray-50 to-gray-50 border-l-4 border-gray-400'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                        <p className="text-lg text-blue-600 font-semibold">{edu.field}</p>
                        <p className="text-gray-600 font-medium">{edu.institution}</p>
                      </div>
                      <div className="mt-2 lg:mt-0 text-right">
                        <div className="flex items-center space-x-1 text-gray-600 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                    {edu.type === 'current' && (
                      <div className="mt-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Currently Enrolled
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Volunteer Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership & Volunteer Experience</h3>
              
              {leadership.map((leader, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{leader.role}</h4>
                      <p className="text-lg text-green-600 font-semibold">{leader.organization}</p>
                      <p className="text-gray-600">{leader.institution}</p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="text-sm text-gray-600">{leader.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {leader.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Award className="h-6 w-6 text-orange-600" />
              <span>Certifications</span>
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-600">
              <h4 className="font-bold text-gray-900 mb-2">Continuous Learning</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Committed to staying current with industry trends and emerging technologies through 
                ongoing certification and professional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;