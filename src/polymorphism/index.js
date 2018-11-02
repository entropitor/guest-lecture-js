import CodeSlide from "spectacle-code-slide";
import React from "react";

import { BlockQuote, Cite, Heading, Notes, Quote, Slide } from "spectacle";

import {
  changeClassAnswerSnippet,
  changeClassFinalAnswerCurrentSyntaxSnippet,
  changeClassFinalAnswerSnippet,
  changeClassImprovedAnswerSnippet,
  changeClassTaskSnippet,
  introConvertedSnippet,
  introSnippet,
  mixin2Snippet,
  mixinSnippet
} from "./classSnippets";

export default [
  <Slide>
    <Heading>Polymorphism</Heading>
  </Slide>,
  <CodeSlide
    lang="js"
    code={introSnippet}
    ranges={[{ loc: [0, 30], title: "Classes in JS" }]}
  />,
  <Slide>
    <Heading textSize={200}>❓</Heading>
    <Heading size={2}>What is special about the classes in JS?</Heading>
  </Slide>,
  <Slide>
    <Heading textSize={200}>❗️</Heading>
    <Heading size={2}>They don't exist</Heading>
  </Slide>,
  <Slide>
    <Heading size={2}>Prototype based inheritance</Heading>
    <BlockQuote>
      <Quote textColor="tertiary" textSize={50}>
        Prototype-based programming is a style of object-oriented programming in
        which behaviour reuse is performed via a process of reusing existing
        objects via delegation that serve as prototypes.
      </Quote>
      <Cite textColor="quaternary">Wikipedia</Cite>
    </BlockQuote>
    <Notes>Explain prototypes = cliches. E.g. a "nerd"</Notes>
  </Slide>,
  <Slide>
    <Heading textSize={200}>🖼</Heading>
    <Heading size={2}>Let's paint a picture!</Heading>
    <Notes>
      Explain the object diagram, what happens if object doesn't have own
      property.
    </Notes>
  </Slide>,
  <CodeSlide
    lang="js"
    code={introConvertedSnippet}
    ranges={[
      { loc: [0, 30], title: "Let's convert" },
      { loc: [3, 6], title: "The constructor..." },
      { loc: [13, 16], title: "...becomes a function" },
      { loc: [7, 10], title: "The method" },
      { loc: [17, 20], title: "...is part of the prototype" },
      { loc: [1, 2], title: "The static method" },
      { loc: [21, 24], title: "...is part of the object" },
      { loc: [25, 26], title: "How does the object diagram look?" }
    ]}
  />,
  <Slide>
    <Heading textSize={200}>❓</Heading>
    <Heading size={2}>How would you do multiple inheritance?</Heading>
    <Notes>
      Explain copy vs delegation, Let them try out a couple of object diagrams
    </Notes>
  </Slide>,
  <Slide>
    <Heading textSize={200}>🔧</Heading>
    <Heading size={2}>Let's build something!</Heading>
    <Notes>Wouldn't it be cool to have flying ninja's?</Notes>
  </Slide>,
  <CodeSlide
    lang="js"
    code={mixinSnippet}
    ranges={[
      { loc: [0, 30], title: "Let's build a NinjaBird prototype" },
      { loc: [12, 13] }
    ]}
  />,
  <Slide>
    <Heading textSize={200}>❗️</Heading>
    <Heading size={2}>Mixins!</Heading>
    <Notes>Explain copy vs delegation</Notes>
  </Slide>,
  <CodeSlide
    lang="js"
    code={mixin2Snippet}
    ranges={[{ loc: [13, 20], title: "Object.create" }]}
  />,
  <Slide>
    <Heading textSize={200}>❓</Heading>
    <Heading size={2}>How would you change the class at run-time?</Heading>
    <Notes>Draw an object diagram</Notes>
  </Slide>,
  <CodeSlide
    lang="js"
    code={changeClassTaskSnippet}
    ranges={[{ loc: [0, 17] }, { loc: [18, 24] }]}
  />,
  <Slide>
    <Heading textSize={200}>🔧</Heading>
    <Heading size={2}>Let's build it!</Heading>
    <Notes>Change class at runtime</Notes>
  </Slide>,
  <CodeSlide
    lang="js"
    code={changeClassAnswerSnippet}
    ranges={[{ loc: [14, 15] }, { loc: [0, 17] }, { loc: [18, 24] }]}
  />,
  <CodeSlide
    lang="js"
    code={changeClassImprovedAnswerSnippet}
    ranges={[{ loc: [14, 15] }, { loc: [0, 17] }, { loc: [18, 24] }]}
  />,
  <CodeSlide
    lang="js"
    code={changeClassFinalAnswerSnippet}
    ranges={[{ loc: [5, 6] }, { loc: [0, 11] }, { loc: [12, 19] }]}
  />,
  <CodeSlide
    lang="js"
    code={changeClassFinalAnswerCurrentSyntaxSnippet}
    ranges={[{ loc: [8, 9] }, { loc: [0, 9] }, { loc: [10, 16] }]}
  />
];
