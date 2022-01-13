import React from "react";

/*Importing Wrapper for Home*/
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { Spacer } from "../../components/spacer/spacer.component";

/*importing Home sections*/
import Hero from "./Sections/Hero/hero.section";
import WhyChooseUs from "./Sections/WhyChooseUs/whyChooseUs.section";
import InternWithUs from "./Sections/InternWithUs/internWithUs.section";
import Testimonials from "./Sections/Testimonials/testimonials.section";
import Partners from "./Sections/Partners/partners.section";
import Clients from "./Sections/Clients/clients.section";
import ContactUs from "./Sections/ContactUs/contactUs.section"
import OurProducts from "./Sections/OurProducts/ourProducts.section";
import AboutItechnology from "./Sections/AboutItechnology/aboutItechnology.section";

const Home = () => {
  return (
    <FlexibleDiv flexDirection="column" paddingVertical="0">
      <Spacer size="small" />
      <Hero />
      <Spacer size="medium" />
      <AboutItechnology />
      <Spacer size="medium" />
      <WhyChooseUs />
      <Spacer size="medium" />
      <InternWithUs />
      <Spacer size="medium" />
      <Clients />
      <Spacer size="medium" />
      <Testimonials />
      <Spacer size="medium" />
      <Partners />
      <Spacer size="medium" />
      <OurProducts />
      <Spacer size="medium" />
      <ContactUs />
    </FlexibleDiv>
  );
};

export default Home;
