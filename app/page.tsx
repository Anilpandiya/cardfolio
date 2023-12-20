'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faCodepen } from '@fortawesome/free-brands-svg-icons';

const Page = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const images = [
    '/picofme1.png',
    '/picofme2.png',
    '/picofme3.png',
    '/picofme4.png',
    '/picofme5.png',
    '/picofme6.png',
    '/picofme7.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 7) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="bg-white rounded-lg overflow-hidden p-12 shadow-card-animation flex flex-col items-center w-196">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src={images[currentImage - 1]}
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Anil Pandiya</h1>
          <p className="text-base text-purple-600 mb-4">Senior Frontend Developer</p>
          <div className="flex flex-wrap justify-center items-center mb-4 ml-8">
            <a href="mailto:anilpandiya05@gmail.com" className="flex items-center mb-2 mr-4">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            </a>
            <a href="https://anilpandiya.github.io" target="_blank" className="flex items-center mb-2 mr-4">
              <FontAwesomeIcon icon={faUser} className="mr-4" />
            </a>
            <a href="https://www.linkedin.com/in/anilpandiya" target="_blank" className="flex items-center mb-2 mr-4">
              <FontAwesomeIcon icon={faLinkedin} className="mr-4" />
            </a>
            <a href="https://github.com/Anilpandiya" target="_blank" className="flex items-center mb-2 mr-4">
              <FontAwesomeIcon icon={faGithub} className="mr-4" />
            </a>
            <a href="https://medium.com/@Anilpandiya05" target="_blank" className="flex items-center mb-2 mr-4">
              <FontAwesomeIcon icon={faMedium} className="mr-4" />
            </a>
            <a href="https://stackblitz.com/@Anilpandiya" target="_blank" className="flex items-center mb-2 mr-4">
              <FontAwesomeIcon icon={faCodepen} className="mr-4" />
            </a>
            <a href="tel:+919672598162" className="flex items-center mb-2 mr-4">
              <FontAwesomeIcon icon={faPhone} className="mr-4" />
            </a>
          </div>
          <div className="text-base text-gray-700 text-center">
            <p>+91-9672598162</p>
            <a href="https://calendly.com/anilpandiya/30min" target="_blank" className="text-blue-600">
              <FontAwesomeIcon icon={faCalendarAlt} className="ml-4" />
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Let&lsquo;s connect 🤝 and collaborate on amazing projects together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
