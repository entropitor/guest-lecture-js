// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#f5f6fa',
    secondary: '#0097e6',
    tertiary: '#40739e',
    quaternary: 'white',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Heading size={1}>
            Javascript Guest Lecture
          </Heading>
          <Heading size={2}>
            Jens Claes
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
