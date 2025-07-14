import React from 'react';
import { Cloud, Network, Code, Shield, Monitor, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: ["OpenStack (RedHat, Mirantis)", "Ceph", "AWS", "Azure", "VMware", "KVM", "IaaS", "PaaS"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "DevOps & Tools",
      skills: ["Linux", "Docker", "SQL", "Prometheus", "Grafana", "HPSM", "ITSM", "Git", "Jenkins", "CI/CD"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Network,
      title: "Networking",
      skills: ["MPLS", "BGP", "OSPF", "VPNs", "L2/L3", "Cisco", "Juniper", "SDN", "Call Routing"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Monitor,
      title: "Operations",
      skills: ["Incident Management", "Customer Service", "SLA Compliance", "Uptime Optimization", "Network Monitoring", "Troubleshooting", "NOC Support"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Security & Access",
      skills: ["Identity & Access Management", "Firewalls", "MDM", "Group Policy", "Active Directory"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Settings,
      title: "Soft Skills",
      skills: ["Communication", "Documentation", "Cross-Functional Collaboration", "Customer Support", "Leadership"],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Core Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical expertise across cloud infrastructure, networking, and operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;