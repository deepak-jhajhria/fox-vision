import React from "react";
import { Description, H2 } from "./common/Heading";

const Customer = () => {
  return (
    <div className="bg-blue">
      <div className="container px-3 mx-auto">
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="lg:w-1/2 w-full px-3">
            <Description
              className="!text-white  text-center lg:mb-[76px]"
              description="Angebot"
            />
            <H2
              className="!text-white  text-center lg:mb-[76px]"
              heading="Angebot"
            />
          </div>
          <div className="lg:w-1/2 w-full px-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
