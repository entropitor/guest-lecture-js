import CodeSlide from "spectacle-code-slide";
import React from "react";

import { Heading, Slide } from "spectacle";

import { introConvertedSnippet, introSnippet } from "./iteratorSnippets";

export default [
  <Slide>
    <Heading>Generators</Heading>
  </Slide>,
  <CodeSlide
    lang="js"
    code={introSnippet}
    ranges={[{ loc: [0, 30], title: "Generator" }]}
  />,
  <CodeSlide
    lang="js"
    code={introConvertedSnippet}
    textSize={20}
    ranges={[{ loc: [0, 22] }]}
  />
];
