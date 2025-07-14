import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "6+" },
    { icon: Award, label: "Certifications", value: "4" },
    { icon: Users, label: "VMs Managed", value: "12,000+" },
    { icon: Target, label: "Uptime Achieved", value: "99.9%" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">About Me</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Results-oriented Cloud and Network Engineer with 6+ years of experience in cloud infrastructure, 
                enterprise networking, and operational support. Skilled in managing large-scale OpenStack 
                environments, Ceph storage, and service assurance across mission-critical deployments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Proven expertise in network protocols (MPLS, BGP, VPNs), automation, and incident resolution 
                in 24/7 environments. Currently pursuing advanced studies in Applied Network Infrastructure & 
                System Administration at Conestoga College, Canada.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Seeking to leverage technical expertise and problem-solving acumen to contribute to 
                high-availability cloud and network solutions in the Canadian technology landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;