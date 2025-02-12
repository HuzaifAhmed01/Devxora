import React from "react";
import ContactUs from "../../components/Contact/ContactUs";
import Marquee from "../../components/maquee/Marquee";

const Contact = () => {
  return (
    <div>
      <ContactUs />
      <Marquee text={'Flawless Dev, Smooth UX '} speed={15}/>

    </div>
  );
};

export default Contact;
