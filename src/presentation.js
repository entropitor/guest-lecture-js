import { introConvertedSnippet } from "./generators/iteratorSnippets";

import React from "react";

import { Deck, Heading, ListItem, List, Slide, CodePane } from "spectacle";
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
    primary: "#2D2D2D",
    secondary: "#999999",
    tertiary: "#718c00",
    quaternary: "#6699cc"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const slides = [
  [
    <Slide>
      <Heading size={1}>Javascript Guest Lecture</Heading>
      <Heading size={2}>Jens Claes</Heading>
    </Slide>,
    <Slide>
      <Heading size={1}>Outline</Heading>
      <List ordered>
        <ListItem>Who am I?</ListItem>
        <ListItem>Javascript Syntax</ListItem>
        <ListItem>Polymorphism in JS</ListItem>
        <ListItem>Generators</ListItem>
        <ListItem>Promises</ListItem>
      </List>
    </Slide>
  ],
  WhoAmI,
  JavascriptSyntax,
  Polymorphism,
  Generators,
  [
    <Slide>
      <Heading size={2} textColor="tertiary">
        Questions?
      </Heading>
      <Heading size={4} textColor="secondary">
        jens@datacamp.com
      </Heading>
    </Slide>,
    <Slide>
      <Heading size={2} textColor="tertiary">
        Feedback?
      </Heading>
      <Heading size={4} textColor="secondary">
        https://tinyurl.com/cpl-javascript
      </Heading>
    </Slide>
  ]
]
  .reduce((acc, next) => [...acc, ...next], [])
  .map((slide, i) => React.cloneElement(slide, { key: i }));
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        {slides}
      </Deck>
    );
  }
}
