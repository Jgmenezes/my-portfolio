import MEDIA_QUERIES from "../../utils/constants/mediaQuerie.constants"
import styled from "styled-components"

import { PRIMARY_COLOR } from "../../utils/constants/color.constants"
import { Paragraph } from "../Texts/texts"

export const Link = styled.a`
  color: ${PRIMARY_COLOR};
  text-decoration: none;
`;

export const Bold = styled.span`
  font-size: calc(1.5rem + 0.5vw);
  font-weight: bold;
`;

export const HomeTitle = styled(Paragraph)`
  padding: 1.5rem;
  
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    max-width: 40%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: center;
  
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    align-items: center;
    margin-left: 236px;
    height: 100vh;
  }
`;