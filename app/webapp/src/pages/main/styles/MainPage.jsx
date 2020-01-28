import styled from "styled-components";
import { OnedayHeading1 } from "../../../constants/Mixins";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: black;
`;

export const ComingSoonWrapper = styled.div``;

export const NameWrapper = styled.div`
  ${OnedayHeading1}
  color: white;
`;
