import React from "react";
import styled from "styled-components";

type Props = {
  center: React.ReactNode;
  planets: string[];
};

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 500px;
  position: relative;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const PLANET_POSITION = [
  {
    top: 200,
    left: 0,
  },
  {
    top: 100,
    left: 50,
  },
  {
    top: 75,
    left: 220,
  },
  {
    top: 45,
    left: 320,
  },
  {
    top: 75,
    left: 400,
  },
  {
    top: 200,
    left: 450,
  },
  {
    top: 300,
    left: 390,
  },
  {
    top: 300,
    left: 390,
  },
  {
    top: 340,
    left: 320,
  },
  {
    top: 360,
    left: 200,
  },
  {
    top: 320,
    left: 100,
  },
  {
    top: 280,
    left: 0,
  },
];

function SolurSistum({ center, planets }: Props) {
  return (
    <Container>
      <Center>{center}</Center>
      {planets.map((planet, i) => (
        <img
          alt="something"
          src={planet}
          style={{
            position: "absolute",
            ...PLANET_POSITION[i],
          }}
        />
      ))}
    </Container>
  );
}

export default SolurSistum;
