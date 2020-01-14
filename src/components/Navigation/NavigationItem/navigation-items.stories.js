import React from "react"
import NavigationItem from "./navigation-item";

export default {
  title: 'Components|NavigationItem',
  component: NavigationItem,
}

const props = {
  activeBackground: "#312DFF",
  background: "#312D4E",
  image: {
    alt: 'Image',
    src: 'https://img.icons8.com/cotton/2x/mountain.png'
  },
  title: "Home"
}

export const item = () => <NavigationItem {...props} />;