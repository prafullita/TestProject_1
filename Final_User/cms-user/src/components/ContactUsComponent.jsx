import React from "react";
import Enquiryform from "./Enquiryform";
import Addresscomponent from "./Addresscomponent";
// import Map from "./Map";
import MapComponent from "./MapComponent";

function ContactUsComponent() {
  return (
    <div>
        <MapComponent />
   
      <div className="container">
        <div className="row">
          <Enquiryform />
          <Addresscomponent />
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
