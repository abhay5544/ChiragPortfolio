// import React from 'react';
// import { ChevronDown, Download, Mail, Linkedin, Github } from 'lucide-react';

// const Hero = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//             Cloud & Network
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
//               Infrastructure Expert
//             </span>
//           </h1>
          
//           <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
//             Results-oriented engineer with 6+ years of experience in cloud infrastructure, 
//             enterprise networking, and operational support across mission-critical deployments.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
//             >
//               <Mail className="h-5 w-5" />
//               <span>Get In Touch</span>
//             </button>
            
//             <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center space-x-2">
//               <Download className="h-5 w-5" />
//               <span>Download Resume</span>
//             </button>
//           </div>

//           <div className="flex justify-center space-x-6">
//             <a href="https://www.linkedin.com/in/budheliya-chirag/" className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-300">
//               <Linkedin className="h-6 w-6" />
//             </a>
//             <a href="#" className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-300">
//               <Github className="h-6 w-6" />
//             </a>
//             <a href="chirag.budheliya046@gmail.com " className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-300">
//               <Mail className="h-6 w-6" />
//             </a>
//           </div>
//         </div>

//         <button
//           onClick={() => scrollToSection('about')}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
//         >
//           <ChevronDown className="h-8 w-8" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-900 via-blue-900 to-blue-950 overflow-hidden">
      {/* Floating Cloud SVGs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-10 left-[-100px] w-[500px] h-[300px] bg-[url('/cloud1.svg')] bg-no-repeat bg-contain animate-cloudFloatSlow opacity-20" />
        <div className="absolute bottom-0 right-[-100px] w-[500px] h-[300px] bg-[url('/cloud2.svg')] bg-no-repeat bg-contain animate-cloudFloatFast opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
          Cloud & Network
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            Infrastructure Expert
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-100/90 mb-10 leading-relaxed max-w-3xl mx-auto">
          ☁️ Transforming infrastructure with scalable cloud solutions, secure enterprise networking, and modern DevOps practices. 6+ years of hands-on excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Get In Touch
          </button>

          <a
            href="/Chirag_Budheliya_Resume.pdf"
            download
            className="border border-white/30 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-6 text-white/80 text-lg">
          <a href="https://www.linkedin.com/in/budheliya-chirag/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-transform duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-transform duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="mailto:chirag.budheliya046@gmail.com" className="hover:text-white hover:scale-110 transition-transform duration-300">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
