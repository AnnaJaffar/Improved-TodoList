import React, { useEffect, useRef } from 'react';

const Privacy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current && sectionRef.current instanceof Element) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current && sectionRef.current instanceof Element) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen max-w-full">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className=" max-w-3xl mx-auto space-y-4">
          <p className='text-base font-sans'>Welcome to Ibisim Kart! This Privacy Policy outlines how we handle user information for our single-player VR karting game. We prioritize your privacy and ensure that any information collected is used solely to enhance your gaming experience.</p>

          <h2 className='text-lg font-bold font-sans'>1. Introduction</h2>
          <p className='text-base font-sans'>This Privacy Policy outlines how we handle user information for our single-player VR karting game. We prioritize your privacy and ensure that any information collected is used solely to enhance your gaming experience.</p>

          <h2 className='text-lg font-bold font-sans'>2. Information We Collect</h2>
          <ul>
            <li className='text-base font-sans'><strong>Player Height:</strong> We ask for your height to set the appropriate height of the player when seated in the kart. This information is not stored and is only used during the game session.</li>
          </ul>

          <h2 className='text-lg font-bold font-sans'>3. Use of Information</h2>
          <ul>
            <li className='text-base font-sans'><strong>Player Height:</strong> The height information is used exclusively to adjust the player’s in-game experience for better karting. It is not stored or shared with any third parties.</li>
          </ul>

          <h2 className='text-lg font-bold font-sans'>4. Displayed Information</h2>
          <ul>
            <li className='text-base font-sans'><strong>Lap Times:</strong> Lap times are displayed during the game but are not stored or shared.</li>
          </ul>

          <h2 className='text-lg font-bold font-sans'>5. Data Security</h2>
          <p className='text-base font-sans'>We do not store any personal information. The height data is used in real-time and discarded after the game session ends.</p>

          <h2 className='text-lg font-bold font-sans'>6. Policy Updates</h2>
          <p className='text-base font-sans'>This Privacy Policy may be updated periodically. We will ensure the link to this policy remains active and up-to-date.</p>

          <h2 className='text-lg font-bold font-sans'>7. Contact Us</h2>
          <p className='text-base font-sans'>If you have any questions or concerns about this Privacy Policy, please contact us at jaffar.s.m.h@gmail.com.</p>

          <p className='flex flex-col p-6 text-xl font-bold font-sans align-middle text-center'>Thank you for playing Ibisim Kart! <br></br><span className='mt-2'>Enjoy your karting experience with peace of mind.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;


