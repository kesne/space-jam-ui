import React from "react";
import styled from "styled-components";
import InsetLogo from "../InsetLogo";

type Props = {
  children: React.ReactNode;
};

const Header = styled.div`
  border-bottom: 4px solid #bababa;
  display: flex;
`;

const LogoWrapper = styled.div`
  border-right: 4px solid #bababa;
`;

const Contont = styled.div`
  margin: 40px;
`;

export default function Detail({ children }: Props) {
  return (
    <div>
      <Header>
        <LogoWrapper>
          <InsetLogo />
        </LogoWrapper>
      </Header>
      <Contont>{children}</Contont>
    </div>
  );
}
