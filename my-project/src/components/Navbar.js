import React from "react";
import "./css/Navbar.css";

export default function navbar() {
  return (
    <nav class="navbar  fixed-top  mb-10">
      <a
        class=" navbar-brand "
        href="https://www.google.co.in/?client=safari&channel=mac_bm"
      >
        <img
          class="navlogo mx-3 d-inline-block align-center"
          src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/automotive-companies/ashok-leyland-logo.png"
          width="60"
          height="30"
          alt=""
        />
        <h1 class=" mx-3 d-inline-block align-center mt-3  text-blue-600 text-3xl">
          <b class="navlogo">ASHOK LEYLAND</b>
        </h1>
      </a>
      <h1 class=" mx-3 d-inline-block align-center mt-2  text-black text-3xl  pr-5">
        <b class="navlogo">Team Unchained</b>
      </h1>
    </nav>
  );
}
