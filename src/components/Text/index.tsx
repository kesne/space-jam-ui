import styled from "styled-components";

type Props = {
  title?: boolean;
  color?: string;
};

const Text = styled.p<Props>`
  color: ${(props) => props.color ?? "#ff0000"};
  font-family: Times;
  font-size: ${(props) => (props.title ? "26px" : "13px")};
`;

export default Text;
