"use client"
// components/Body.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../dashboard/components/Sidebar';
import Head from '../dashboard/components/Head';
import { MutatingDots } from 'react-loader-spinner';

const Body = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [loading]);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    setChatHistory([...chatHistory, inputValue]);
    setInputValue('');
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:5000/generate', { input: inputValue });
      setChatHistory([...chatHistory, inputValue, response.data.output]);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-black h-screen">
        <Head />
        {/* Chatbot Section */}
        <div className="max-w-7xl mx-auto mb-10">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Chatbot</h2>
              <p className="text-lg text-gray-500">
                Ask me anything, and I will do my best to provide you with helpful
                information.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <form onSubmit={handleChatSubmit} className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
            <div className="mt-4 bg-gray-100 rounded-lg p-4">
              {chatHistory.map((message, index) => (
                <div key={index} className={`p-2 rounded-lg mb-2 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
                  {loading && index === chatHistory.length - 1 ? (
                    <div className='min-w-max flex items-center justify-center'>
                      <MutatingDots
                        visible={true}
                        height="100"
                        width="100"
                        color="#d32f2f"
                        secondaryColor="#d32f2f"
                        radius="12.5"
                        ariaLabel="mutating-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    message
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Your Models Section */}
        <div className="max-w-7xl mx-auto mb-10">
          {/* ... (Your Models Section code remains the same) */}
        </div>
        {/* Blog Section */}
        <div className="max-w-7xl mx-auto">
          {/* ... (Blog Section code remains the same) */}
        </div>
      </div>
    </div>
  );
};

export default Body;
