import React from "react";
import Container from "../components/Container";
import Text from "../components/Text";
import Clusterfuck from "../components/Clusterfuck";
import BBall from "../img/p-bball.gif";

export default function Landing() {
  return (
    <Container>
      <Clusterfuck
        active={0}
        planets={[
          BBall,
          BBall,
          BBall,
          BBall,
          BBall,
          BBall,
          BBall,
          BBall,
          BBall,
          BBall,
          BBall,
          BBall,
        ]}
      >
        <Text title>
          You've made it: Jam Central Station, the central depository for all
          things Space Jam. From the best seats in the house, you can peruse the
          production notes, find out about the filmmakers, check out the
          theatrical trailer, and look at a bunch of photos from the film.
        </Text>
        <Text color="yellow">
          SPACE JAM, characters, names, and all related indicia are trademarks
          of Warner Bros. © 1996
        </Text>
      </Clusterfuck>
    </Container>
  );
}
