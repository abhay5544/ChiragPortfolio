import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Reliance Jio Infocomm Ltd",
      location: "India",
      period: "Feb 2022 – Nov 2023",
      achievements: [
        "Maintained and supported 10+ RedHat and 2 Mirantis OpenStack private clouds with >12,000 VMs",
        "Administered 250+ compute/KVM orchestration nodes and 100+ Ceph storage nodes",
        "Reduced incident response times and improved uptime to 99.9% for key customer workloads",
        "Handled ITSM tools (HPSM) for cloud IaaS/PaaS incidents, achieving high ticket resolution rates",
        "Authored UAT test cases and documentation to validate cloud service functionality"
      ]
    },
    {
      title: "Enterprise Service Delivery & Assurance Engineer",
      company: "Reliance Jio Infocomm Ltd",
      location: "India",
      period: "Sep 2018 – Jan 2022",
      achievements: [
        "Deployed and maintained enterprise networks for high-profile clients (HDFC Bank, SBI, AAI)",
        "Configured and supported MPLS, BGP, L2/L3 VPNs, SIP, VoIP, OSPF, and Cisco SDN solutions",
        "Delivered 24/7 support for mission-critical infrastructure across government and financial sectors",
        "Reduced network service delivery times by 20% through process streamlining and incident analysis",
        "Managed devices including Cisco, Juniper, RAD, RAISECOM, EdgeCore"
      ]
    },
    {
      title: "Technical Associate – Business BOND",
      company: "Reliance Jio Infocomm Ltd",
      location: "India",
      period: "Oct 2017 – Aug 2018",
      achievements: [
        "Provided technical support for enterprise apps (JIO POS, SAP, Beat Planner) and IT infrastructure",
        "Conducted training for users on new application features, improving user adoption rates",
        "Generated MIS reports and dashboards to support business decision-making and performance analysis"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progressive career growth in cloud infrastructure and enterprise networking
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 transform md:translate-x-4 w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className="ml-12 md:ml-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <span className="font-semibold">{experience.company}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;