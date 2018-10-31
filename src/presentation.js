import React from "react";

import { Deck, Heading, ListItem, List, Slide } from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import AboutDataCamp from "./about-datacamp";
import Babel from "./babel";
import Generators from "./generators";
import JavascriptSyntax from "./javascript-syntax";
import Polymorphism from "./polymorphism";
import Promises from "./promises";
import Quirks from "./quirks";
import WhoAmI from "./who-am-i";

require("normalize.css");

const theme = createTheme(
  {
    primary: "#f5f6fa",
    secondary: "#0097e6",
    tertiary: "#40739e",
    quaternary: "white"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={1}>Javascript Guest Lecture</Heading>
          <Heading size={2}>Jens Claes</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>Outline</Heading>
          <List ordered>
            <ListItem>Who am I?</ListItem>
            <ListItem>Javascript Syntax</ListItem>
            <ListItem>Polymorphism in JS</ListItem>
            <ListItem>Generators</ListItem>
            <ListItem>Promises</ListItem>
            <ListItem>Babel</ListItem>
            <ListItem>Quirks</ListItem>
          </List>
        </Slide>
        <WhoAmI />
        {JavascriptSyntax}
        <Polymorphism />
        <Generators />
        <Promises />
        <Babel />
        <Quirks />
        <AboutDataCamp />
      </Deck>
    );
  }
}
