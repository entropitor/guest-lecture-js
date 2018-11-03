import CodeSlide from "spectacle-code-slide";
import React from "react";

import {
  CodePane,
  Heading,
  List,
  ListItem,
  Notes,
  Slide,
  Layout,
  Fill
} from "spectacle";

import {
  advancedIteratorSnippet,
  algebraicEffects,
  cloneableSnippet,
  rngSnippet
} from "./effectsSnippet";
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
  iteratorSnippet,
  treeSnippet
} from "./iteratorSnippets";

const introSlides = [
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
      { loc: [14, 17] },
      { loc: [2, 14] },
      { loc: [11, 13] },
      { loc: [3, 11] },
      { loc: [8, 10] },
      { loc: [4, 8] }
    ]}
  />,
  <Slide>
    <CodePane textSize={25} lang="js" source={introSnippet} theme="external" />
    <Notes>
      Example generator again, can be used to explain the previous code
    </Notes>
  </Slide>,
  <Slide>
    <CodePane textSize={25} lang="js" source={treeSnippet} theme="external" />
    <Notes>Example spreading of generator</Notes>
  </Slide>
];
const fibonnaciSlides = [
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
  // <Slide>
  //   <CodePane
  //     textSize={12}
  //     lang="js"
  //     source={lazyFibonnaciFullSnippet}
  //     theme="external"
  //   />
  //   <Notes>Full pipeline</Notes>
  // </Slide>,
  <Slide>
    <Layout>
      <Fill>
        <CodePane
          textSize={20}
          lang="js"
          source={lazyFibonnaciFullSnippet
            .split("\n")
            .slice(0, 19)
            .join("\n")}
          theme="external"
        />
      </Fill>
      <Fill>
        <CodePane
          textSize={20}
          lang="js"
          source={lazyFibonnaciFullSnippet
            .split("\n")
            .slice(19)
            .join("\n")}
          theme="external"
        />
      </Fill>
    </Layout>
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
const effectsSlides = [
  <Slide>
    <Heading textSize={200}>🦅</Heading>
    <Heading size={2}>Let's spread our wings even more!</Heading>
    <Notes>Let's learn about some advanced generators</Notes>
  </Slide>,
  <Slide>
    <CodePane textSize={25} lang="js" source={rngSnippet} theme="external" />
    <Notes>
      Does anybody recognize this algorithm? java.util.Random! Wouldn't it be
      awesome if we could set the next x value?
    </Notes>
  </Slide>,
  // <Slide>
  //   <CodePane
  //     textSize={25}
  //     lang="js"
  //     source={advancedIteratorSnippet}
  //     theme="external"
  //   />
  //   <Notes>We can provide this value by rng.next(3)</Notes>
  // </Slide>,
  <CodeSlide
    lang="js"
    code={advancedIteratorSnippet}
    ranges={[{ loc: [0, 16] }, { loc: [7, 11] }, { loc: [14, 17] }]}
  />,
  <Slide>
    <Heading textSize={200}>🔧</Heading>
    <Heading size={2}>Let's build Eff-Lang!</Heading>
    <Notes>Let's build eff-lang in JS (http://www.eff-lang.org/)</Notes>
  </Slide>,
  <CodeSlide
    lang="js"
    code={algebraicEffects}
    ranges={[
      { loc: [45, 50] },
      { loc: [51, 54] },
      { loc: [26, 31] },
      { loc: [31, 36] },
      { loc: [36, 44] },
      { loc: [0, 5] },
      { loc: [5, 6] },
      { loc: [23, 26] },
      { loc: [7, 22] },
      { loc: [8, 9] },
      { loc: [9, 20] },
      { loc: [20, 21] },
      { loc: [10, 14] },
      { loc: [14, 19] },
      { loc: [45, 50] },
      { loc: [51, 54] },
      { loc: [26, 31] },
      { loc: [31, 36] },
      { loc: [36, 44] }
    ]}
    notes={"Algebraic effects"}
  />,
  <Slide>
    <Layout>
      <Fill>
        <CodePane
          textSize={12}
          lang="js"
          source={
            cloneableSnippet +
            "\n\n" +
            algebraicEffects
              .split("\n")
              .slice(0, 7)
              .join("\n")
          }
          theme="external"
        />
      </Fill>
      <Fill>
        <CodePane
          textSize={12}
          lang="js"
          source={algebraicEffects
            .split("\n")
            .slice(7, 36)
            .join("\n")}
          theme="external"
        />
      </Fill>
      <Fill>
        <CodePane
          textSize={12}
          lang="js"
          source={algebraicEffects
            .split("\n")
            .slice(36)
            .join("\n")}
          theme="external"
        />
      </Fill>
    </Layout>
    <Notes>Algebraic effects</Notes>
  </Slide>
];
export default [...introSlides, ...fibonnaciSlides, ...effectsSlides];
