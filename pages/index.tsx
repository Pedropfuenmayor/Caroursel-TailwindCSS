import type { NextPage } from "next";
import Image from "next/image";
import ImageComponent from "components/image-components";

const Home: NextPage = () => {

  return (
    <div className="container w-full">
      <div className="slider flex w-full">
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
      </div>
    </div>
  );
};

export default Home;
