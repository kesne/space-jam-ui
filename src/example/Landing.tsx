import React from "react";
import Container from "../components/Container";
import Detail from "../components/Detail";
import Text from "../components/Text";

export default function Landing() {
  return (
    <Container>
      <Detail>
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
      </Detail>
    </Container>
  );
}
