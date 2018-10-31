import CodeSlide from "spectacle-code-slide";
import * as React from "react";

import { Heading, Slide } from "spectacle";

export default class JavascriptSyntax extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Slide>
          <Heading>Javascript Syntax</Heading>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw-loader!./variables.js")}
            ranges={[
              { loc: [0, 270], title: "Walking through some code" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              { loc: [8, 10] }
              // ...
            ]}
          />
        </Slide>
      </React.Fragment>
    );
  }
}
