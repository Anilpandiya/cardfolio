'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './globals.css';

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
        <div className="bg-white rounded-lg overflow-hidden p-12 shadow-card-animation flex w-196">
          <div className="w-1/2 pr-8">
            <div className="w-48 h-48 relative">
              <Image
                src={images[currentImage - 1]}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <h1 className="text-2xl font-bold text-gray-900">Anil Pandiya</h1>
            <p className="text-base text-purple-600 mb-4">Senior Frontend Developer</p>
            <div className="text-base text-gray-700">
              <p>Email: example@example.com</p>
              <p>Phone: +1234567890</p>
              {/* Add more info as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
