import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import Navbar from "../../components/navbar";
import RandomDog from "../../components/randomDog";
import arrowSvg from "../../svg/arrow.svg";
import dogSvg from "../../svg/dog.svg";

function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <div className="container-about-home space-between flex">
        <div className="container-info-home m-9">
          <h1>
            CodeDog
            <img src={arrowSvg} className="img-arrow ml-2" alt="arrow-img" />
          </h1>
          <h2 className="mt-2">Descubra Diferentes</h2>
          <h3>
            Informações e curiosidades <br /> sobre diversas raças de cachorros.
          </h3>
          <a href="#">
            <button className="pl-7 mt-4 flex">
              Descobrir dogs <FaLongArrowAltRight className="icon-arrow ml-1" />
            </button>
          </a>
        </div>
        <img src={dogSvg} className="img-dog" alt="img-dog" />
      </div>
      <RandomDog />
    </div>
  );
}

export default Home;
