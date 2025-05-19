import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import face from '../assets/face.jpeg'; // adjust the path if needed
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[#0f0f1b] text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-20">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <div className="text-lm text-[gray]-400 mb-2 h-6">
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'Frontend Engineer',
              2000,
              'Full Stack Developer',
              2000,
              'Data Scientist',
              2000,
              'Mobile App Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#dfd9ff]"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight mt-2">
          Hello I’m <br />
          <span className="text-[#dfd9ff]">Tholoana Sejane</span>
        </h1>

        <p className="text-sm text-gray-400 mt-4 max-w-md">
          I craft smart solutions at the intersection of data, code, and mobile—I'm a builder of intelligent, user-centric tech.
        </p>

        {/* Download Button and Socials */}
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <button className="bg-tertiary text-[#dfd9ff] border border-[green-pink-gradient] px-6 py-2 rounded-full hover:bg-[#00ff88] hover:text-black transition">
            Download CV ⬇
          </button>

          <div className="flex gap-4 mt-2 sm:mt-0">
            {['fa-github', 'fa-linkedin-in', 'fa-instagram', 'fa-twitter'].map((icon, i) => (
              <a href="#" key={i} className="text-[#00ff88] hover:text-white text-xl">
                <i className={`fab ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold">2</h2>
            <p className="text-sm text-gray-400">Years of experience</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">10</h2>
            <p className="text-sm text-gray-400">Projects completed</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">8</h2>
            <p className="text-sm text-gray-400">Technologies mastered</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">50</h2>
            <p className="text-sm text-gray-400">Code commits</p>
          </div>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
        <div className="relative w-72 h-72 rounded-full border-4 border-dashed border-[#dfd9ff] flex items-center justify-center">
          <img
            src={face} // Replace with your actual image
            alt="Thulz"
            className="w-60 h-60 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
