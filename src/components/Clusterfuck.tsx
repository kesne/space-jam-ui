import React from "react";
import styled, { keyframes, css } from "styled-components";
import InsetLogo from "./InsetLogo";

type Props = {
  children: React.ReactNode;
  planets: string[];
  active?: number;
};

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 100px;
  height: 100vh;
  border-right: 4px solid #bababa;
`;

const Contont = styled.div`
  flex: 1;
  margin: 40px;
`;

const LogoWrapper = styled.div`
  border-bottom: 4px solid #bababa;
`;

const blink = keyframes`
	0% {
		opacity: 1;
	}

	33% {
		opacity: 1;
	}
	34% {
		opacity: 0.75;
	}

	66% {
		opacity: 0.75;
	}
	67% {
		opacity: 0.5;
	}

	99% {
		opacity: 0.5;
	}
`;

const Planet = styled.img<{ active?: boolean }>`
  display: block;
  padding: 15px;
  margin: 0 auto;
  animation: ${(props) =>
    props.active
      ? css`
          ${blink} 0.7s linear infinite
        `
      : "none"};
`;

export default function Clusterfuck({ children, planets, active }: Props) {
  return (
    <Container>
      <Sidebar>
        <LogoWrapper>
          <InsetLogo />
        </LogoWrapper>
        <div>
          {planets.map((planet, i) => (
            <Planet
              key={i}
              src={planet}
              alt="something"
              active={i === active}
            />
          ))}
        </div>
      </Sidebar>
      <Contont>{children}</Contont>
    </Container>
  );
}
