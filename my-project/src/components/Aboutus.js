import React from "react";
import "./css/Aboutus.css";
import { Link } from "react-router-dom";
export default function Aboutus() {
  return (
    <div className=" mt-8">
      <div
        class="skills  text-dark py-5 "
        style={{ backgroundColor: "white" }}
        id="aboutus"
      >
        <div class="skill-row">
          <img
            class="computer-image mb-5"
            data-aos="fade-right"
            data-aos-duration="1000"
            src="https://images.news18.com/ibnlive/uploads/2022/03/ashok-leyland-avtr-2825-16461891373x2.jpg"
            alt="computer-img "
            style={{ borderRadius: "50%" }}
          />
          {/* <h3>Lorem & Ipsum</h3> */}
          <p class="aboutus mb-6">
            <i>
              Our software provides end to end automation of spare parts
              management at your fingertips using advanced and cutting edge
              technologies.
            </i>
          </p>
          <Link to="/EmergencyMaps">
            <button
              type="button"
              class="btn btn-outline-danger btn-lg py-2 px-2 mx-2"
            >
              Seek Help
            </button>
          </Link>
          <a href="https://colab.research.google.com/drive/1zGBh7pAQgZSjDObAsq6wSm1MAKmJuhfd">
            <button
              type="button"
              class="btn btn-outline-dark btn-lg py-2 px-2 mx-2"
            >
              Inventory Foresight
            </button>
          </a>
          <a href="https://unchained12.netlify.app/">
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg py-2 px-2 mx-2"
            >
              Detect counterfeit
            </button>
          </a>
        </div>

        {/* <div class="skill-row">
          <img class="chillies-image" src={logo} alt="chillies-img" style={{borderRadius: "50%"}}/>
          <h3>Lorem Ipsum Dolor</h3>
          <p>Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.</p>
      </div>    */}
      </div>
    </div>
  );
}
