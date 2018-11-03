import React from "react";

import { Heading, Slide } from "spectacle";

import {
  arraySnippet,
  objectSnippet,
  variablesSnippet
} from "./variablesSnippet";
import CodeSlide from "../codeslide";

export default [
  <Slide>
    <Heading>Javascript Syntax</Heading>
  </Slide>,
  <CodeSlide
    lang="js"
    code={variablesSnippet}
    ranges={[
      { loc: [0, 5], title: "Constants" },
      { loc: [6, 8], title: "Variables" },
      { loc: [9, 13], title: "Functions" },
      { loc: [14, 17], title: "Globals" }
    ]}
  />,
  <CodeSlide
    lang="js"
    code={objectSnippet}
    ranges={[
      { loc: [0, 3], title: "Objects" },
      { loc: [4, 8], title: "Object Spread" },
      { loc: [9, 11], title: "Destructuring" },
      { loc: [12, 15], title: "Destructuring" }
    ]}
  />,
  <CodeSlide
    lang="js"
    code={arraySnippet}
    ranges={[{ loc: [0, 30], title: "Same for Arrays" }]}
  />
];
