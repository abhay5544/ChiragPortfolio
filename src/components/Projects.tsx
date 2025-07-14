import React from 'react';
import { ExternalLink, Github, Server, Shield, Monitor, Mail } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Site IT Infrastructure Design",
      subtitle: "Capstone Project - Conestoga College",
      period: "Jan 2025 – Apr 2025",
      description: "Comprehensive enterprise infrastructure design and deployment with integrated security and monitoring solutions.",
      technologies: ["Active Directory", "vCenter", "Docker", "Network Security", "Monitoring"],
      features: [
        "Designed and deployed AD-integrated vCenter infrastructure with network security segmentation",
        "Integrated Dockerized services: OSTicket (support), Zimbra (email), Mattermost (chat)",
        "Implemented Prometheus for network monitoring and performance metrics",
        "Created secure, scalable network architecture with MDM policies and GPO enforcement"
      ],
      icon: Server,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "OpenStack Cloud Management",
      subtitle: "Enterprise Cloud Infrastructure",
      period: "Feb 2022 – Nov 2023",
      description: "Large-scale private cloud management and optimization for enterprise clients.",
      technologies: ["OpenStack", "Ceph", "KVM", "Linux", "Monitoring"],
      features: [
        "Managed 10+ RedHat and 2 Mirantis OpenStack private clouds",
        "Orchestrated 250+ compute nodes and 100+ Ceph storage nodes",
        "Achieved 99.9% uptime for critical customer workloads",
        "Implemented automated monitoring and incident response systems"
      ],
      icon: Monitor,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Enterprise Network Solutions",
      subtitle: "Mission-Critical Infrastructure",
      period: "Sep 2018 – Jan 2022",
      description: "Enterprise networking solutions for financial and government sector clients.",
      technologies: ["MPLS", "BGP", "VPN", "Cisco", "Juniper"],
      features: [
        "Deployed networks for HDFC Bank, SBI, and Airport Authority of India",
        "Configured MPLS, BGP, L2/L3 VPNs, and SDN solutions",
        "Provided 24/7 support for mission-critical infrastructure",
        "Reduced service delivery times by 20% through process optimization"
      ],
      icon: Shield,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Projects & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of significant projects and technical accomplishments in cloud and network infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white/80 text-sm">{project.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm">{project.subtitle}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;