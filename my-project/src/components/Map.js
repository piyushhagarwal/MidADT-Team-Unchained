import React from "react";
import { Link } from "react-router-dom";

export default function Map() {
  return (
    <div class="container mb-10">
      <nav class="navbar navbar-light bg-light">
        <a
          class="navbar-brand  w-full"
          href="https://my.atlistmaps.com/map/8b1bba22-3fd2-440d-8ed1-e0a462f89d23?share=true"
        >
          <iframe
            title="hello"
            src="https://my.atlistmaps.com/map/8b1bba22-3fd2-440d-8ed1-e0a462f89d23?share=true"
            allow="geolocation"
            width="100%"
            height="400px"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </a>
      </nav>
    </div>
  );
}
