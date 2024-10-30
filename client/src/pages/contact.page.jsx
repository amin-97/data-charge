import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formDataToSend = new FormData();
    formDataToSend.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Get in Touch
          </h2>
          <p className="text-black dark:text-gray-300 mb-6">
            Have questions about our services? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3 text-black dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p>Remote</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-black dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:datacharge53@gmail.com"
                  className="hover:text-blue-500"
                >
                  datacharge53@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-black dark:text-white mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-800 text-[#242424] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black dark:text-white mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-800 text-[#242424] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black dark:text-white mb-1"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-800 text-[#242424] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black dark:text-white mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-800 text-[#242424] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
            >
              Send Message
            </button>
          </form>
          {result && (
            <div className="mt-4 text-center text-black dark:text-white">
              {result}
            </div>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 text-black dark:text-gray-300">
        <div>
          <h3 className="font-semibold mb-2">What services do you offer?</h3>
          <p>
            We provide technology consulting services, digital transformation
            strategies, and expert content creation in the technology sector.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            How quickly can I expect a response?
          </h3>
          <p>
            We typically respond to all inquiries within 24-48 business hours.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            Do you offer remote consultations?
          </h3>
          <p>
            Yes, we offer both remote and in-person consultations to accommodate
            your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
// import React, { useState } from "react";

// export default function Contact() {
//   const [result, setResult] = React.useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");

//     const formDataToSend = new FormData();
//     formDataToSend.append("access_key", "e9de5566-7099-45f8-be64-b16af0e7bf05");
//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setResult("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
//         Contact Us
//       </h1>

//       <div className="grid md:grid-cols-2 gap-8 mb-12">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
//             Get in Touch
//           </h2>
//           <p className="text-black dark:text-gray-300 mb-6">
//             Have questions about our services? We'd love to hear from you. Send
//             us a message and we'll respond as soon as possible.
//           </p>

//           <div className="space-y-4">
//             <div className="flex items-start space-x-3 text-black dark:text-gray-300">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 mt-1"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//               <div>
//                 <h3 className="font-semibold mb-1">Location</h3>
//                 <p>Remote</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3 text-black dark:text-gray-300">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 mt-1"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//               <div>
//                 <h3 className="font-semibold mb-1">Email</h3>
//                 <a
//                   href="mailto:datacharge53@gmail.com"
//                   className="hover:text-blue-500"
//                 >
//                   datacharge53@gmail.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm">
//           <form onSubmit={onSubmit} className="space-y-4">
//             <div>
//               <label
//                 className="block text-sm font-medium text-black dark:text-white mb-1"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-800 text-black dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 className="block text-sm font-medium text-black dark:text-white mb-1"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 className="block text-sm font-medium text-black dark:text-white mb-1"
//                 htmlFor="subject"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label
//                 className="block text-sm font-medium text-black dark:text-white mb-1"
//                 htmlFor="message"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
//             >
//               Send Message
//             </button>
//           </form>
//           {result && (
//             <div className="mt-4 text-center text-black dark:text-white">
//               {result}
//             </div>
//           )}
//         </div>
//       </div>

//       <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
//         Frequently Asked Questions
//       </h2>
//       <div className="space-y-4 text-black dark:text-gray-300">
//         <div>
//           <h3 className="font-semibold mb-2">What services do you offer?</h3>
//           <p>
//             We provide technology consulting services, digital transformation
//             strategies, and expert content creation in the technology sector.
//           </p>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">
//             How quickly can I expect a response?
//           </h3>
//           <p>
//             We typically respond to all inquiries within 24-48 business hours.
//           </p>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">
//             Do you offer remote consultations?
//           </h3>
//           <p>
//             Yes, we offer both remote and in-person consultations to accommodate
//             your needs.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
