import React from "react";
import "../components/css/Background.css";

export default function Background() {
  return (
    <video autoplay muted loop id="myVideo">
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
}
