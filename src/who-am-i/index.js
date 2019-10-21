import React from "react";

import { Heading, List, ListItem, Slide } from "spectacle";

export default [
  <Slide>
    <Heading>Who am I</Heading>
    <List>
      <ListItem>Graduated KUL in 2017</ListItem>
      <ListItem>JS developer since forever</ListItem>
      <ListItem>
        DataCamp
        <List style={{ marginLeft: 50 }}>
          <ListItem>Javascript Engineer</ListItem>
          <ListItem>Engineering Manager Mobile Squad</ListItem>
        </List>
      </ListItem>
      <ListItem>
        Quivr
        <List style={{ marginLeft: 50 }}>
          <ListItem>Javascript (& Android) Developer</ListItem>
        </List>
      </ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading size={4} textColor="secondary">
      jens@datacamp.com
    </Heading>
  </Slide>
];
