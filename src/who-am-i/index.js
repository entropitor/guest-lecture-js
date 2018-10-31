import * as React from "react";

import { Heading, ListItem, List, Slide } from "spectacle";

export default class WhoAmI extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Slide>
          <Heading>Who am I</Heading>
          <List>
            <ListItem>Graduated in 2017</ListItem>
            <ListItem>JS developer since forever</ListItem>
            <ListItem>
              DataCamp
              <List style={{ marginLeft: 50 }}>
                <ListItem>Team Lead Mobile Team</ListItem>
                <ListItem>Fullstack Javascript Developer</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Quivr
              <List style={{ marginLeft: 50 }}>
                <ListItem>Javascript (& Android) Developer</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
      </React.Fragment>
    );
  }
}
