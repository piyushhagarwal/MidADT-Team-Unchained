import React from "react";

export default function EmergencyMaps() {
  return (
    <div className=" mt-32">
      <h1
        class="text-center m-2 display-4  mb-6"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <b>Emergency Service</b>
      </h1>
      <nav class="navbar navbar-light bg-light  mt-8 my-8">
        <a
          class="navbar-brand  w-full"
          href="https://my.atlistmaps.com/map/8b1bba22-3fd2-440d-8ed1-e0a462f89d23?share=true"
        >
          <iframe
            title="hello"
            src="https://my.atlistmaps.com/map/8b1bba22-3fd2-440d-8ed1-e0a462f89d23?share=true"
            allow="geolocation"
            width="100%"
            height="700px"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </a>
      </nav>
    </div>
  );
}
