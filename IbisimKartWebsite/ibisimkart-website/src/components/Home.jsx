import React, { useEffect, useRef } from 'react';

const Home = () => {
  const sectionRefs = useRef([]);
  const features = [
    {
      image: '/src/assets/1.jpg',
      alt: 'Reception room for Ibisim Karting Place',
      text: 'Reception Room.',
    },
    {
      image: '/src/assets/2.jpg',
      alt:'Laptimes displayed on steering wheel of kart while its driving on the track',
      text: 'Hot lapping',
    },
    {
      image: '/src/assets/3.jpg',
      alt: 'Indoor Karting Track',
      text: 'Realistic indoor tracks',
    },
  ];

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

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="py-16 opacity-0 transition-opacity duration-1000 ease-in-out"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center p-6 m-6">Welcome to Ibisim Kart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-800 rounded-sm transform transition duration-500 hover:scale-105 p-8 m-8">
              <div className="relative w-full" style={{ paddingBottom: '80%' }}> {/* Adjust for 16:9 aspect ratio */}
              <iframe
                className="absolute w-full h-full object-cover"
                src="https://www.youtube.com/embed/5dSAX0M7FYs?autoplay=1&mute=1"
                title="YouTube video"
                style={{ border: 'none' }}  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              </div>
            </div>

            <div className="space-y-4">
              <p className="p-6 m-6 items-center text-2xl font-sans font-medium transform transition duration-500 hover:translate-x-2">
                Ibisim Kart is a karting game which aims to bring a realistic driving experience to stand alone virtual reality headsets.
              </p>
              <section
                ref={(el) => (sectionRefs.current[2] = el)}
                className="py-14 flex flex-col items-center opacity-0 transition-opacity duration-1000 ease-in-out">
                <div
                  className='p-6  flex justify-center w-fit text-white font-sans font-semibold text-lg md:text-xl opacity-100 transition-opacity duration-1000 ease-in-out'
                >
                  Available on Meta
                </div>

                <a
                  href="https://www.meta.com/en-gb/experiences/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center bg-white px-2 py-0 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                  <img src="/src/assets/metaIcon.svg" alt="Oculus Icon" className="w-12 h-12" />        
                </a>
              </section>
            </div>
          </div>
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="py-16 opacity-0 transition-opacity duration-1000 ease-in-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-700 mb-4 rounded-lg">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className='font-sans font-semibold'>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
// import React, { useEffect, useRef } from 'react';

// const Home = () => {
//   const sectionRefs = useRef([]);
//   const features = [
//     {
//       image: '/src/assets/1.jpg',
//       alt: 'Reception room for Ibisim Karting Place',
//       text: 'Reception Room.',
//     },
//     {
//       image: '/src/assets/2.jpg',
//       alt:'Laptimes displayed on steering wheel of kart while its driving on the track',
//       text: 'Hot lapping',
//     },
//     {
//       image: '/src/assets/3.jpg',
//       alt: 'Indoor Karting Track',
//       text: 'Realistic indoor tracks',
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sectionRefs.current.forEach((ref) => {
      
//       if (ref) {
//         observer.observe(ref);
//       }
//     });

//     return () => {
//       sectionRefs.current.forEach((ref) => {
       
//         if (ref) {
//           observer.unobserve(ref);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="bg-black text-white min-h-screen max-w-full">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <section
//       ref={(el) => (sectionRefs.current[0] = el)}
//       className="py-16 opacity-0 transition-opacity duration-1000 ease-in-out"
//     >
//       <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center p-6 m-6">Welcome to Ibisim Kart</h1>
      
     
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
//         <div className="bg-gray-800 rounded-sm transform transition duration-500 hover:scale-105 p-8 m-8">
//           <div className="relative w-full" style={{ paddingBottom: '100%' }}>
            
//             <video
//               className="absolute w-full h-full object-cover"
//               controls
//               autoPlay={true}
//               muted
//               loop
//               src="/src/assets/ibisimKart.mp4"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>

      
//         <div className="space-y-4">
//           <p className="p-6 m-6 items-center text-2xl font-sans font-medium transform transition duration-500 hover:translate-x-2">
//             Ibisim Kart is a karting game which aims to bring a realistic driving experience to stand alone virtual reality headsets.
//           </p>
//           <section
//           ref={(el) => (sectionRefs.current[2] = el)}
//           className="py-14 flex flex-col items-center opacity-0 transition-opacity duration-1000 ease-in-out">
//             <div
//               className='p-6  flex justify-center w-fit text-white font-sans font-semibold text-lg md:text-xl opacity-100 transition-opacity duration-1000 ease-in-out'
//             >
//               Available on Oculus
//             </div>

//             <a
//             href="https://www.meta.com/en-gb/experiences/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="items-center bg-white px-2 py-0 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
//               <img src="/src/assets/metaIcon.svg" alt="Oculus Icon" className="w-12 h-12" />        
            
//           </a>
          
//         </section>
//         </div>

//       </div>
//     </section>
//           <section
//             ref={(el) => (sectionRefs.current[1] = el)}
//             className="py-16 opacity-0 transition-opacity duration-1000 ease-in-out"
//           >
//           {/* <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Features</h2> */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-800 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg"
//                 >
//                 <div className="aspect-w-16 aspect-h-9 bg-gray-700 mb-4 rounded-lg">
//                   {/* Display the feature image */}
//                   <img
//                     src={feature.image}
//                     alt={feature.alt}
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//                 {/* Display the unique text for each feature */}
//                 <p className='font-sans font-semibold'>{feature.text}</p>
//                 </div>
//             ))}
//           </div>
//         </section>
  
       
        


        
//       </div>
//     </div>
//   );
// };

// export default Home;
