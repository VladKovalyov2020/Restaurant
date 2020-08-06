import React from "react";

// Modules

import { FaGooglePlay, FaArtstation, FaHome, FaList } from "react-icons/fa";

export const navbarList = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Menu", to: "menu" },
];

export const sidebarList = [
  { name: "Home", to: "home", icon: () => <FaHome /> },
  { name: "About", to: "about", icon: () => <FaArtstation /> },
  { name: "Menu", to: "menu", icon: () => <FaList /> },
];

export const imageList = [
  {
    id: "1",
    img: require("../../assets/images/dish_1.jpg"),
    title: "dishe",
  },
  {
    id: "2",
    img: require("../../assets/images/dish_2.jpg"),
    title: "dishe",
  },
  {
    id: "3",
    img: require("../../assets/images/dish_3.jpg"),
    title: "dishe",
  },
  {
    id: "4",
    img: require("../../assets/images/dish_4.jpg"),
    title: "dishe",
  },
  {
    id: "5",
    img: require("../../assets/images/dish_5.jpg"),
    title: "dishe",
  },
  {
    id: "6",
    img: require("../../assets/images/dish_6.jpg"),
    title: "dishe",
  },
];

export const AppetisersMenuList = [
  {
    name: "Tzatsiki",
    price: "3.99",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
  {
    name: "Aubergine Salad",
    price: "5.50",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
  {
    name: "Aubergine Salad",
    price: "5.25",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
];

export const StartersMenuList = [
  {
    name: "Haloumi",
    price: "3.99",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
  {
    name: "Spinach Pie",
    price: "5.50",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
];

export const SaladsMenuList = [
  {
    name: "Olive Special",
    price: "5.99",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
  {
    name: "Greek Salad",
    price: "5.50",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
  {
    name: "Gusto Salad",
    price: "5.25",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
];

export const MainDishesMenuList = [
  {
    name: "Cornish Mackerel",
    price: "5.99",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
  {
    name: "Roast Lamb",
    price: "5.50",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
  {
    name: "Fried Chicken",
    price: "5.25",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
  {
    name: "Pastitsio",
    price: "5.99",
    description: "Refreshing traditional cucumber and garlic yoghurt dip.",
  },
];
