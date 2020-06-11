import React from "react";
import Link from "../components/Link";
import Container from "../components/Container";
import Text from "../components/Text";
import SolurSistum from "../components/SolurSistum";
import SpaceJamLogo from "./img/p-jamlogo.gif";
import BBall from "./img/p-bball.gif";

export default function Home() {
  return (
    <Container>
      <SolurSistum
        center={<img alt="Logo" src={SpaceJamLogo} />}
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
        ]}
      />
      <Link>Hello world</Link>
      <Link>Hello world</Link>
      <Link>Hello world</Link>
      <Text>
        SPACE JAM, characters, names, and all related indicia are trademarks of
        Warner Bros. © 1996
      </Text>
    </Container>
  );
}
