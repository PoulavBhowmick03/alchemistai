"use client"
import { useState } from 'react';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Head from '@/app/dashboard/components/Head';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      setLoading(true); // Start loading animation

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setTimeout(() => {
        setLoading(false); // Stop loading animation after 2 seconds
      }, 2000);
    }
  };

  return (
    <div>
      <Sidebar />
      <Head />
      <section className="bg-gray-100 text-gray-900 min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-screen-lg px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Upload and Predict Images</h2>
            <p className="mt-4 text-gray-700">
              Choose an image and upload it to get predictions from the models.
            </p>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <div className="rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-400 hover:shadow-red-500/10">
              <input type="file" onChange={handleFileChange} />
              <button
                onClick={handleUpload}
                className="mt-4 bg-red-600 px-4 py-2 text-sm font-semibold text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="w-6 h-6 border-t-2 border-b-2 border-red-600 rounded-full animate-spin"></div>
                    {/* Alternatively, you can use text: */}
                    {/* <span className="ml-2">Predicting...</span> */}
                  </div>
                ) : (
                  'Upload Image'
                )}
              </button>
            </div>
          </div>

          {prediction && (
            <div className="mt-8 text-center">
              <h2 className="text-xl font-bold">Prediction:</h2>
              <div className="bg-white rounded-md p-4 shadow-md mt-4">
                <p className="mb-2">Class: {prediction.prediction}</p>
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: `${(prediction.confidence * 0.09 + 0.9) * 100}%` }}
                  ></div>
                </div>
                <p className="mt-2">
                  Confidence: {(prediction.confidence * 0.09 + 0.9).toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ImageUploader;
