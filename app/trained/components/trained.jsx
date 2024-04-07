const Trained = () => {
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
            <button className="block rounded-lg bg-red-400 px-6 py-3 text-base font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring">
              Use our AI service
            </button>
          </div>
        </div>
        <div className="mt-8"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Model 1
            </h2>
          </div>
        </div>
      </div>
      <div className=" pt-5 pl-24 pr-6 grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[1fr_120px] lg:gap-8 lg:[&:has(>*:last-child:hover)]:grid-cols-[1fr_160px]">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Model 2
            </h2>
          </div>
        </div>
      </div>
      <div className=" pt-5 pl-24 pr-6 grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[1fr_120px] lg:gap-8 lg:[&:has(>*:last-child:hover)]:grid-cols-[1fr_160px]">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Model 3  
            </h2>
          </div>
        </div>
      </div>
      <div className=" pt-5 pl-24 pr-6 grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[1fr_120px] lg:gap-8 lg:[&:has(>*:last-child:hover)]:grid-cols-[1fr_160px]">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        
      </div>
    </div>
  );
};

export default Trained;
