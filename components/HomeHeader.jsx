import * as React from "react";
import { motion } from "framer-motion";


function Header() {
  return (
    <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 my-auto whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      </div>
      <div className="flex gap-5 justify-between text-sm tracking-wide leading-5">
      </div>
    </header>
  );
}

function HeroImage() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b02f34c9602dd4a54ca7cc320c28520f27a09fd147fb18b598bf8ddc7f0a6776?apiKey=b9f73daff245412db60bf67e2f427461&"
      alt="Hero image"
      className="self-start w-full aspect-[1.3] max-md:max-w-full"
    />
  );
}

function HomeHeader() {
  return (
    <div className="flex flex-col items-center px-16 pt-5 font-bold bg-neutral-50 max-md:px-5">
      <div className="flex flex-col pb-20 w-full max-w-[1048px] max-md:max-w-full">
        <Header />
        <HeroImage />
      </div>
    </div>
  );
}

export default HomeHeader;