import React from "react";
import { whatsapp } from "../assets";

const WhatsApp = () => {
  return (
    <div>
      <a
        href="https://wa.me/971509154581"
        class="whatsapp_float bounce"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} />
      </a>
    </div>
  );
};

export default WhatsApp;
