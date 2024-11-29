import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How can I become a delivery partner with FoodHub?",
                        answer: "You can join FoodHub in 3 easy steps Download the app Complete your profile and upload documents Get your uniform and bag delivered at your home Deliver orders and Earn big with FoodHub"
                    },
                    {
                        question: "What documents and details do I need to join FoodHub?",
                        answer: "You need the following documents. In case you don’t have any of these documents, don’t worry - you can share them later. Aadhar Card or Voter Card PAN Card Driving licence (not needed for cycle) Bank details"
            
                    },
                    {
                        question: "Is there any joining fees to become delivery partner in FoodHub?",
                        answer: "The onboarding fee is around ₹1500 and it varies from city to city. This fee is deducted in multiple installments after your onboarding."
            
                    },
                    {
                        question: "What are working hours for a delivery partner at FoodHub?",
                        answer: "FoodHub offers complete flexibility to choose your shifts. You can become a part-time or a full-time delivery partner based on your preference."
            
                    },
                    {
                        question: "I don’t have any vehicle. Can I still become a delivery partner?",
                        answer: "I don’t have any vehicle. Can I still become a delivery partner? Yes. You can rent a bike/e-bike/cycle for deliveries. Swiggy may also be able to help you connect with vendors to make the vehicle available. Please reach out to your nearest onboarding centre for more details."
            
                    }, 

                    {
                        question: "How much can I earn with FoodHub?",
                        answer: "How much can I earn with FoodHub? Your earning on FoodHub depends upon your city and the number of orders you deliver. Download the app, and fill in your details to understand how much you can earn."
            
                    },
                    {
                        
                        question: "Is this a full-time delivery job with FoodHub?",
                        answer: "This is not a delivery job rather this is a paid partnership between you and FoodHub where you will be compensated basis number of deliveries completed. FoodHub offers complete flexibility to choose your shifts. You can become a part-time or a full-time delivery partner based on your preference."
                    },
                    {
                        question: "When and How will I be paid by FoodHub?",
                        answer: "When and How will I be paid by FoodHub? FoodHub will transfer your earnings every week directly into your bank account."
            
                    },
                    {
                        
                        question: "What are other benefits of joining FoodHub?",
                        answer: "What are other benefits of joining FoodHub? FoodHub provides best in-class insurance of up to Rs 12 lakhs for you and your family, skills development program for you and your children , easy personal loans, vehicle maintenance support and many more benefits. Download the app and join FoodHub to avail these benefits."
                    },
                    
                    
                    // Add more FAQs as needed
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-9 mt-4 text-green-600 text-center">
                Frequently Asked Questions
            </h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg p-4 bg-gray-100"> {/* Removed border */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full text-left font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-700">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;




// import React, { useState } from 'react';

// const FAQ = () => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const faqs = [
//         {
//             question: "How can I become a delivery partner with FoodHub?",
//             answer: "You can join FoodHub in 3 easy steps Download the app Complete your profile and upload documents Get your uniform and bag delivered at your home Deliver orders and Earn big with FoodHub"
//         },
//         {
//             question: "What documents and details do I need to join FoodHub?",
//             answer: "You need the following documents. In case you don’t have any of these documents, don’t worry - you can share them later. Aadhar Card or Voter Card PAN Card Driving licence (not needed for cycle) Bank details"

//         },
//         {
//             question: "What documents and details do I need to join FoodHub?",
//             answer: "You need the following documents. In case you don’t have any of these documents, don’t worry - you can share them later. Aadhar Card or Voter Card PAN Card Driving licence (not needed for cycle) Bank details"

//         },
//         {
//             question: "What documents and details do I need to join FoodHub?",
//             answer: "You need the following documents. In case you don’t have any of these documents, don’t worry - you can share them later. Aadhar Card or Voter Card PAN Card Driving licence (not needed for cycle) Bank details"

//         },
//         {
//             question: "What documents and details do I need to join FoodHub?",
//             answer: "You need the following documents. In case you don’t have any of these documents, don’t worry - you can share them later. Aadhar Card or Voter Card PAN Card Driving licence (not needed for cycle) Bank details"

//         },
//         // Add more FAQs as needed
//     ];

//     const handleToggle = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="max-w-2xl mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-9 mt-4 text-green-600 text-center">
//                 Frequently Asked Questions
//             </h1>
//             <div className="space-y-4">
//                 {faqs.map((faq, index) => (
//                     <div key={index} className="border border-gray-300 rounded-lg p-4">
//                         <button
//                             onClick={() => handleToggle(index)}
//                             className="w-full text-left font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
//                         >
//                             {faq.question}
//                         </button>
//                         {openIndex === index && (
//                             <p className="mt-2 text-gray-700">
//                                 {faq.answer}
//                             </p>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FAQ;