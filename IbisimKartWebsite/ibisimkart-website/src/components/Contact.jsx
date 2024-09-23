import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [state, handleSubmit] = useForm("xldrywae");  // Replace 'yourFormId' with your actual Formspree form ID

  if (state.succeeded) {
    return <p className='p-10 m-4 text-center text-lg text-white font-sans font-medium'>Thanks for reaching out! We will get back to you soon.</p>;
  }

  return (
    <div className="bg-black text-white min-h-screen max-w-full">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 opacity-0 transition-opacity duration-1000 ease-in-out">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <p className="mb-8 text-center">Feel free to reach out to us with any queries or feedback!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" autoComplete='name' className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500" required />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500" required />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500" required></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className="w-full bg-red-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-red-600 transform hover:scale-105">
              {state.submitting ? 'Sending...' : 'Send'}
            </button>
          </form>
          {state.errors && state.errors.length > 0 && (
            <div className="mt-4 text-red-500">
              Oops! There was a problem with your submission. Please try again.
            </div>
          )}
        
        </div>
      </div>
    </div>
  );
};

export default Contact;
// import React, { useEffect, useRef } from 'react';
// import { useForm } from '@formspree/react';

// const Contact = () => {
//   const sectionRef = useRef(null);

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

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const [state, handleSubmit] = useForm("https://formspree.io/f/xldrywae");  // Replace 'yourFormId' with your actual Formspree form ID

//   if (state.succeeded) {
//     return <p>Thanks for reaching out! We will get back to you soon.</p>;
//   }

//   return (
//     <div className="bg-black text-white min-h-screen max-w-full">
//       <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 opacity-0 transition-opacity duration-1000 ease-in-out">
//         <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
//         <div className="max-w-2xl mx-auto">
//           <p className="mb-8 text-center">Feel free to reach out to us with any queries or feedback!</p>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block mb-2">Name</label>
//               <input type="text" id="name" name="name" className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500" required />
//             </div>
//             <div>
//               <label htmlFor="email" className="block mb-2">Email</label>
//               <input type="email" id="email" name="email" className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500" required />
//             </div>
//             <div>
//               <label htmlFor="message" className="block mb-2">Message</label>
//               <textarea id="message" name="message" rows="4" className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500" required></textarea>
//             </div>
//             <button type="submit" disabled={state.submitting} className="w-full bg-red-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-red-600 transform hover:scale-105">
//               {state.submitting ? 'Sending...' : 'Send'}
//             </button>
//           </form>
//           {state.errors.length > 0 && (
//             <div className="mt-4 text-red-500">
//               Oops! There was a problem with your submission. Please try again.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React, { useEffect, useRef } from 'react';

// const Contact = () => {
//   const sectionRef = useRef(null);

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

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="bg-black text-white min-h-screen max-w-full">
//       <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 opacity-0 transition-opacity duration-1000 ease-in-out">
//         <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
//         <div className="max-w-2xl mx-auto">
//           <p className="mb-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block mb-2">Name</label>
//               <input type="text" id="name" className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500" />
//             </div>
//             <div>
//               <label htmlFor="email" className="block mb-2">Email</label>
//               <input type="email" id="email" className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500" />
//             </div>
//             <div>
//               <label htmlFor="message" className="block mb-2">Message</label>
//               <textarea id="message" rows="4" className="w-full p-2 bg-gray-800 rounded transition-all duration-300 focus:ring-2 focus:ring-red-500"></textarea>
//             </div>
//             <button type="submit" className="w-full bg-red-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-red-600 transform hover:scale-105">Send</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;