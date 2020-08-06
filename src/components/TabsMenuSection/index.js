import React from "react";

// Modules

import { FaUtensils } from "react-icons/fa";
import { GiSandwich, GiFoodChain, GiSpottedArrowhead } from "react-icons/gi";

// Components

import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";
import { Tabs } from "../Tabs";
import { Appetisers } from "../../components/TabsMenuSection/Appetisers";
import { Starters } from "../../components/TabsMenuSection/Starters";
import { Salads } from "../../components/TabsMenuSection/Salads";
import { MainDishes } from "../../components/TabsMenuSection/MainDishes";
import {
  AppetisersMenuList,
  StartersMenuList,
  SaladsMenuList,
  MainDishesMenuList,
} from "../../components/Constants/landingPage";

// Styles

import "./styles.scss";

// ----------------

export const TabsMenuSection = () => {
  const tabsLinks = [
    { name: "appetisers", title: "Appetisers", icon: () => <GiSandwich /> },
    { name: "starters", title: "Starters", icon: () => <GiFoodChain /> },
    { name: "salads", title: "Salads", icon: () => <GiSpottedArrowhead /> },
    { name: "mainDishes", title: "Main Dishes", icon: () => <FaUtensils /> },
  ];

  const tabsContent = [
    {
      name: "appetisers",
      content: () => (
        <div>
          <Appetisers list={AppetisersMenuList} />
        </div>
      ),
    },
    {
      name: "starters",
      content: () => (
        <div>
          <Starters list={StartersMenuList} />
        </div>
      ),
    },
    {
      name: "salads",
      content: () => (
        <div>
          <Salads list={SaladsMenuList} />
        </div>
      ),
    },
    {
      name: "mainDishes",
      content: () => (
        <div>
          <MainDishes list={MainDishesMenuList} />
        </div>
      ),
    },
  ];

  return (
    <section id="menu" className="menu">
      <ContentWidthLimiter>
        <div className="menu__content">
          <h2>Restaurant menu</h2>
          <Tabs
            defaultTab={tabsLinks[0].name}
            content={tabsContent}
            links={tabsLinks}
          />
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
