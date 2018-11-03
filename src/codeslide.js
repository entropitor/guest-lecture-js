import React from "react";
import CodeSlide from "spectacle-code-slide";
import { CodePane, Slide } from "spectacle";

// For presenting
export default CodeSlide;
// For pdf export
/*
export default class CustomCodeSlide extends React.Component {
  render() {
    const { lang, code, key, duplicate, ...rest } = this.props;
    return (
      <Slide key={key} {...rest}>
        <CodePane textSize={25} lang={lang} source={code} theme="external" />
      </Slide>
    );
  }
}
// */
