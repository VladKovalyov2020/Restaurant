import React from "react";

import { HomeSection } from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import { Header } from "../../components/Header";
import { TabsMenuSection } from "../../components/TabsMenuSection";

export const LandingPage = () => {
  return (
    <div>
      <Header headerText="Header is cool" />
      <HomeSection />
      <AboutSection />
      <TabsMenuSection />
    </div>
  );
};
