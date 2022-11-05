import React from "react";
import Navbar from "../../components/navbar";
import cookiesSvg from "../../svg/cookies.svg";
import arrowSvg from "../../svg/arrow.svg";
import categorySvg from "../../svg/category.svg";

function Home() {
  return (
    <div className="container-home ">
      <Navbar />
      <div className="about-container space-between flex ">
        <div className="info-home ml-9">
          <h1>
            CodeDog <img src={arrowSvg} className="img-arrow" alt="arrow-img" />
          </h1>
          <h2 className="mt-2">Descubra Diferentes</h2>
          <h3>
            Informações e curiosidades <br /> sobre diversas raças de cachorros.
          </h3>
        </div>
        <img
          src={categorySvg}
          className="img-category"
          alt="categories-image"
        />
        <img src={cookiesSvg} className="img-cookies" alt="cookies-image " />
      </div>
    </div>
  );
}

export default Home;
