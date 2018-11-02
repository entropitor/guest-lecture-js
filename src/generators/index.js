import CodeSlide from "spectacle-code-slide";
import React from "react";

import { CodePane, Heading, List, ListItem, Notes, Slide } from "spectacle";

import {
  exampleInfiniteListSnippet,
  integratedFibonnaciSnippet,
  lazyFibonnaciFullSnippet,
  lazyFibonnaciSnippet,
  mapFilterSnippet,
  takeSnippet
} from "./fibonnaciSnippets";
import {
  introConvertedSnippet,
  introSnippet,
  iteratorSnippet
} from "./iteratorSnippets";

export default [
  <Slide>
    <Heading>Generators</Heading>
  </Slide>,
  <Slide>
    <CodePane textSize={25} lang="js" source={introSnippet} theme="external" />
    <Notes>Example generator</Notes>
  </Slide>,
  <Slide>
    <CodePane
      textSize={23}
      lang="js"
      source={iteratorSnippet}
      theme="external"
    />
    <Notes>Example iterator</Notes>
  </Slide>,
  <Slide>
    <CodePane textSize={25} lang="js" source={introSnippet} theme="external" />
    <Notes>Example generator again</Notes>
  </Slide>,
  <Slide>
    <CodePane
      textSize={25}
      lang="js"
      source={introConvertedSnippet}
      theme="external"
    />
    <Notes>Example generator converted to non-generator function</Notes>
  </Slide>,
  <CodeSlide
    lang="js"
    code={introConvertedSnippet}
    ranges={[
      { loc: [15, 16] },
      { loc: [2, 14] },
      { loc: [11, 13] },
      { loc: [3, 11] },
      { loc: [8, 10] },
      { loc: [4, 8] }
    ]}
  />,
  <Slide>
    <Heading textSize={200}>🔧</Heading>
    <Heading size={2}>Let's build something!</Heading>
    <Notes>Let's build lazy computation of fibonnaci</Notes>
  </Slide>,
  <Slide>
    <List>
      <ListItem>Take the fibonnaci numbers</ListItem>
      <ListItem>Multiply them by 3</ListItem>
      <ListItem>Filter out the odd ones</ListItem>
      <ListItem>Print the first 10 of these</ListItem>
    </List>
  </Slide>,
  <Slide>
    <CodePane
      textSize={25}
      lang="js"
      source={lazyFibonnaciSnippet}
      theme="external"
    />
    <Notes>Lazy fibonnaci</Notes>
  </Slide>,
  <Slide>
    <CodePane textSize={25} lang="js" source={takeSnippet} theme="external" />
    <Notes>Take => Full infinite list support</Notes>
  </Slide>,
  <Slide>
    <CodePane
      textSize={25}
      lang="js"
      source={mapFilterSnippet}
      theme="external"
    />
    <Notes>Map, filter: easy to make</Notes>
  </Slide>,
  <Slide>
    <CodePane
      textSize={25}
      lang="js"
      source={exampleInfiniteListSnippet}
      theme="external"
    />
    <Notes>Example thing</Notes>
  </Slide>,
  <Slide>
    <CodePane
      textSize={12}
      lang="js"
      source={lazyFibonnaciFullSnippet}
      theme="external"
    />
    <Notes>Full pipeline</Notes>
  </Slide>,
  <Slide>
    <CodePane
      textSize={20}
      lang="js"
      source={integratedFibonnaciSnippet}
      theme="external"
    />
    <Notes>Full pipeline, not single responsability</Notes>
  </Slide>
];
