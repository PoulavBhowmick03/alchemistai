"use client"
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import Image from "next/image";
import colab from "../../../public/colab.png";

const Trained = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    // Set the href attribute to the file location
    link.href = "../../../../Fedlearn/client.py"; // Update the path accordingly
    // Set the download attribute to specify the file name
    link.download = "client.py";
    // Append the anchor element to the DOM
    document.body.appendChild(link);
    // Trigger the click event on the anchor element
    link.click();
    // Remove the anchor element from the DOM after download
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white h-screen">
      <div className="max-w-7xl mx-auto mb-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Your Models
            </h2>
            <p className="text-lg text-gray-500">
              Manage the models you have trained
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            {/* Add onClick event to handle download */}
            <button
              className="block rounded-lg bg-red-400 px-6 py-3 text-base font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring"
              
            >
              Use our AI service
            </button>
          </div>
        </div>
        <div className="mt-8"></div>
      </div>
      <Link href="https://drive.google.com/file/d/1f8oQ03vDLCyZkcCrpi6wGGp9FzsT7YqR/view">
        <div className="max-w-7xl mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Model 1</h2>
            </div>
          </div>
        </div>
      </Link>
      <div className="pt-5 pl-24 pr-6 grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[1fr_120px] lg:gap-8 lg:[&:has(>*:last-child:hover)]:grid-cols-[1fr_160px]">
        <div className=" ml-4 h-56 rounded-lg bg-gray-200">
          <div className="p-4 text-black text-left">
            <h3 className="font-bold text-lg mb-2">COVID-19 X-ray Tracking Model Details:</h3>
            <p className="text-sm">
              This model is trained on X-ray images of COVID-19 patients to track and analyze patterns related to the virus. It utilizes deep learning techniques to identify specific features indicative of COVID-19 infection in X-ray scans.
            </p>
            <p className="text-sm mt-2">
              To train this model:
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Collect a dataset of X-ray images from COVID-19 patients.</li>
              <li>Preprocess the images to enhance features and remove noise.</li>
              <li>Use a deep learning framework such as TensorFlow or PyTorch to train the model.</li>
              <li>Optimize the model's parameters and hyperparameters for accuracy and performance.</li>
              <li>Evaluate the model's performance using validation datasets and adjust as necessary.</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="h-14 rounded-lg bg-gray-200 flex items-center justify-center m-2 text-black">
            <a href="https://colab.research.google.com/drive/1n2fDaikG2v1VzZ9XbPit7hBj6LcWXSMy?usp=sharing"><Image src={colab} alt="Colab" width={96} height={96} /></a>
          </div>
          <div className="h-14 rounded-lg bg-gray-200 flex items-center justify-center m-2 text-black cursor-pointer " onClick={handleDownload}>
            <IoMdDownload />
            Download
          </div>
        </div>
        <div className="">
          
          <div className="h-14 rounded-lg bg-gray-200 flex items-center justify-center m-2 text-black cursor-pointer ">
            <a href="/dashboard/predict">
            Use this model
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trained;
