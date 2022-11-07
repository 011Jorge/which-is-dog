import React from "react";

import { FaPlus } from "react-icons/fa";

function RandomDog() {
  return (
    <div className="container-randomDog">
      <h1 className="pt-5">RandomDog</h1>

      <div className="container-dogData p-7">
        <div className="container-imageDog"></div>
        <div className="ml-9 p-4">
          <button className="button-randomDog my-3 pl-9 flex">
            New Dog <FaPlus className="iconPlus m-1" />
          </button>
          <div className="container-infoDog"></div>
        </div>
      </div>
    </div>
  );
}

export default RandomDog;
