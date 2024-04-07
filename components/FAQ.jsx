"use client"
import React, { useState } from 'react';

// Define the FAQ data
const faqData = [
  {
    question: 'What is AlchemistAI?',
    answer:
      'AlchemistAI is a platform that helps people recover from medical conditions and injuries. We provide a range of tools and resources to support your recovery journey.',
  },
  {
    question: 'How does AlchemistAI work?',
    answer:
      'AlchemistAI offers a comprehensive set of features, including personalized treatment plans, progress tracking, and access to a community of healthcare professionals and peers. Our platform is designed to empower you throughout your recovery process.',
  },
  {
    question: 'Is AlchemistAI free to use?',
    answer:
      'AlchemistAI offers both free and paid subscription plans. The free plan provides basic access to our platform, while the paid plans unlock additional features and support. You can learn more about our pricing options on the Pricing page.',
  },
  {
    question: 'How do I get started with AlchemistAI?',
    answer:
      'To get started with AlchemistAI, simply sign up on our website. You will be guided through the onboarding process, where you can create your profile, set up your recovery goals, and start using our tools and resources. Our team is also available to assist you throughout your journey.',
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the active FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md ${
                activeIndex === index ? 'border-2 border-red-400' : ''
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="px-6 py-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
                  <button className="text-red-400 focus:outline-none">
                    {activeIndex === index ? (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>
                {activeIndex === index && (
                  <div className="mt-4 text-gray-700">{faq.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}