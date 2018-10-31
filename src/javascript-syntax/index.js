import CodeSlide from "spectacle-code-slide";
import React from "react";

import { Heading, Slide } from "spectacle";

import { variablesSnippet } from "./variablesSnippet";

export default [
  <Slide>
    <Heading>Javascript Syntax</Heading>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={variablesSnippet}
    ranges={[{ loc: [0, 1] }]}
  />
];
