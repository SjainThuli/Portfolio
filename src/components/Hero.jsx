// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import face from '../assets/face.jpeg'; // adjust the path if needed
// import { styles } from "../styles";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// const icons = [
//   { icon: faGithub, link: "https://github.com/SjainThuli" },
//   { icon: faLinkedinIn, link: "https://linkedin.com" },
//   { icon: faInstagram, link: "https://instagram.com" },
//   { icon: faTwitter, link: "https://twitter.com" }
// ];

// const Hero = () => {
//   return (
//     <section className="w-full h-screen bg-[#0f0f1b] text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-20 relative overflow-hidden">
//       {/* Left Content */}
//       <div className="flex-1 relative flex flex-col justify-center h-full">
//         <div className="text-lm text-[gray]-400 mb-2 h-6">
//           <TypeAnimation
//             sequence={[
//               'Software Developer',
//               2000,
//               'Frontend Engineer',
//               2000,
//               'Full Stack Developer',
//               2000,
//               'Data Scientist',
//               2000,
//               'Mobile App Developer',
//               2000,
//             ]}
//             wrapper="span"
//             speed={50}
//             repeat={Infinity}
//             className="text-[#dfd9ff]"
//           />
//         </div>

//         <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight mt-2">
//           Hello I’m <br />
//           <span className="text-[#dfd9ff]">Tholoana Sejane</span>
//         </h1>

//         <p className="text-sm text-gray-400 mt-4 max-w-md">
//           I craft smart solutions at the intersection of data, code, and mobile—I'm a builder of intelligent, user-centric tech.
//         </p>

//         {/* Download Button and Socials */}
//         <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
//           <button className="bg-tertiary text-[#dfd9ff] border border-[green-pink-gradient] px-6 py-2 rounded-full hover:bg-[#00ff88] hover:text-black transition">
//             Download CV ⬇
//           </button>

//           {/* <div className="flex gap-4 mt-2 sm:mt-0">
//             {['fa-github', 'fa-linkedin-in', 'fa-instagram', 'fa-twitter'].map((icon, i) => (
//               <a href="#" key={i} className="text-[#00ff88] hover:text-white text-xl">
//                 <i className={`fab ${icon}`}></i>
//               </a>
//             ))}
//           </div> */}

//           <div className="flex gap-4 mt-2 sm:mt-0">
//             {icons.map(({ icon, link }, i) => (
//               <a href={link} key={i} className="text-[#dfd9ff] hover:text-white text-xl" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={icon} />
//               </a>
//             ))}
//           </div>
//         </div>
// </div>
//         {/* Stats */}
//         <div className="absolute bottom-10 flex flex-wrap gap-6 text-center md:text-left">
//           <div>
//             <h2 className="text-2xl font-bold">2</h2>
//             <p className="text-sm text-gray-400">Years of experience</p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">10</h2>
//             <p className="text-sm text-gray-400">Projects completed</p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">8</h2>
//             <p className="text-sm text-gray-400">Technologies mastered</p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">50</h2>
//             <p className="text-sm text-gray-400">Code commits</p>
//           </div>
//         </div>
//       {/* </div> */}

//       {/* Right Content - Image */}
//       <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
//         <div className="relative w-96 h-96 rounded-full border-4 border-dashed border-[#dfd9ff] flex items-center justify-center">
//           <img
//             src={face} // Replace with your actual image
//             alt="Thulz"
//             className="w-80 h-80 rounded-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import face from '../assets/face.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';

// const icons = [
//   { icon: faGithub, link: "https://github.com/SjainThuli" },
//   { icon: faLinkedinIn, link: "https://linkedin.com" },
//   { icon: faInstagram, link: "https://instagram.com" },
//   { icon: faTwitter, link: "https://twitter.com" }
// ];

// const Hero = () => {
//   return (
//     <section className="w-full h-screen text-white flex flex-col justify-between overflow-hidden">
//       {/* Top content */}
//       <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between px-[50px] pt-[120px]">
//         {/* Left Column */}
//         <div className="flex-1 flex flex-col justify-center h-full max-w-lg">
//           {/* Animated Job Titles */}
//           <div className="mb-2 h-6">
//             <TypeAnimation
//               sequence={[
//                 'Software Developer', 2000,
//                 'Frontend Engineer', 2000,
//                 'Full Stack Developer', 2000,
//                 'Data Scientist', 2000,
//                 'Mobile App Developer', 2000
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               className="text-[#dfd9ff]"
//             />
//           </div>

//           {/* Name */}
//           <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight mt-2">
//             Hello I’m <br />
//             <span className="text-[#dfd9ff]">Tholoana Sejane</span>
//           </h1>

//           {/* Description */}
//           <p className="text-sm text-gray-400 mt-4">
//             I craft smart solutions at the intersection of data, code, and mobile—I'm a builder of intelligent, user-centric tech.
//           </p>

//           {/* Button + Social Icons */}
//           <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
//             <a
//               href="/Tholoana_Sejane_CV.pdf"
//               download
//               className="bg-tertiary text-[#dfd9ff] border border-[#00ff88] px-6 py-2 rounded-full hover:bg-[#00ff88] hover:text-black transition flex items-center gap-2"
//             >
//               <FontAwesomeIcon icon={faDownload} />
//               Download CV
//             </a>

//             <div className="flex gap-4 mt-2 sm:mt-0">
//               {icons.map(({ icon, link }, i) => (
//                 <a
//                   key={i}
//                   href={link}
//                   className="text-[#dfd9ff] hover:text-white text-xl"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FontAwesomeIcon icon={icon} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Image (No Spin) */}
//         <div className="flex-1 flex justify-center items-center mt-10 xl:mt-0">
//           <div className="w-96 h-96 rounded-full border-4 border-dashed border-[#dfd9ff] flex items-center justify-center">
//             <div className="w-80 h-80 rounded-full overflow-hidden">
//               <img
//                 src={face}
//                 alt="Tholoana Sejane"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//   {/* Stats at the bottom of the section */}
// <div className="mt-2 pb-10 px-6 md:px-[50px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
//   {[
//     { number: '2', label: 'Years of experience' },
//     { number: '10', label: 'Projects completed' },
//     { number: '8', label: 'Technologies mastered' },
//     { number: '50', label: 'Code commits' }
//   ].map((stat, i) => (
//     <div
//       key={i}
//       className="bg-[#1e1e2f] border border-[#2e2e40] text-center p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
//     >
//       <h2 className="text-3xl font-bold text-[#00ff88]">{stat.number}</h2>
//       <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
//     </div>
//   ))}
// </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import face from '../assets/face.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const icons = [
  { icon: faGithub, link: "https://github.com/SjainThuli" },
  { icon: faLinkedinIn, link: "https://linkedin.com" },
  { icon: faInstagram, link: "https://instagram.com" },
  { icon: faTwitter, link: "https://twitter.com" }
];

const Hero = () => {
  return (
    <section className="w-full h-screen text-white flex flex-col justify-between overflow-hidden">
      {/* Top content row */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-8 px-6 md:px-[40px] pt-20 md:pt-[80px] flex-grow">
        
        {/* Left Column */}
        <div className="w-full xl:w-[45%] text-center xl:text-left space-y-5">
          <TypeAnimation
            sequence={[
              'Software Developer', 2000,
              'Frontend Engineer', 2000,
              'Full Stack Developer', 2000,
              'Data Scientist', 2000,
              'Mobile App Developer', 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#00ff88] text-md md:text-lg"
          />

          <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight">
            Hello, I’m <br />
            <span className="text-[#dfd9ff]">Tholoana Sejane</span>
          </h1>

          <p className="text-sm md:text-base text-gray-400">
            I craft intelligent, user-centric digital experiences that blend frontend finesse, mobile adaptability, and data-driven decision-making. From web to mobile — I build scalable solutions with elegance and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a
              href="/Tholoana_Sejane_CV.pdf"
              download
              className="bg-tertiary text-[#dfd9ff] border border-[#00ff88] px-6 py-2 rounded-full hover:bg-[#00ff88] hover:text-black transition flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </a>

            <div className="flex gap-4 mt-2 sm:mt-0">
              {icons.map(({ icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  className="text-[#dfd9ff] hover:text-white text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full xl:w-[40%] flex justify-center items-center mt-10 xl:mt-0">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-dashed border-[#dfd9ff] flex items-center justify-center">
            <img
              src={face}
              alt="Tholoana Sejane"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats at the bottom */}
      <div className="mt-6 md:mt-8 pb-4 px-6 md:px-[50px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {[
          { number: '2+', label: 'Years of Experience' },
          { number: '10+', label: 'Completed Projects' },
          { number: '8+', label: 'Technologies Mastered' },
          { number: '50+', label: 'Codebase Contributions' }
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-[#1e1e2f] border border-[#2e2e40] text-center p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-3xl font-bold text-[#00ff88]">{stat.number}</h2>
            <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
