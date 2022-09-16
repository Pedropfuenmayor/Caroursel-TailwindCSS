import type { NextPage } from "next";
import ImageComponent from "components/image-components";
import Handle from "components/handle";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Home: NextPage = () => {
  const [porcentage, setPorcentage] = useState(0);

  const increasePorcetageHandler = () => {
    setPorcentage((prevState) => {
      return prevState - 100;
    });
  };

  const decreasePorcetageHandler = () => {
    setPorcentage((prevState) => {
      return prevState + 100;
    });
  };

  return (
    <div className="container m-auto w-full max-w-full flex justify-center">
      <Handle right onClick={increasePorcetageHandler}>
        <ChevronLeftIcon className="h-6 w-6 m-auto group-hover:scale-125 transition duration-300 " />
      </Handle>
      <div
        className={`slider flex w-[90%] -translate-x-[${porcentage}%] transition duration-300`}
      >
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
      </div>
      <Handle left onClick={decreasePorcetageHandler}>
        <ChevronRightIcon className="h-6 w-6 m-auto group-hover:scale-125 transition duration-300 " />
      </Handle>
    </div>
  );
};

export default Home;
