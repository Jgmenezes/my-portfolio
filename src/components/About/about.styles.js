import { Title,Paragraph } from "../Texts/texts"
import styled, { css } from "styled-components"
import MEDIA_QUERIES from "../../utils/constants/mediaQuerie.constants";

const Square = styled.div`
  align-items: center;
  background: ${({ background }) => background};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    height: 10vh;
  }
  
  ::before {
    border-radius: 50%;
    content: '';
    display: block;
    height: 40px;
    position: absolute;
    transition: all 0.25s linear;
    width: 40px;
  }
  ${({ isActive }) => !isActive && css`
    &:hover::before {
      background-color: ${({ activeBackground }) => activeBackground};
      transform: scale(10);
    }
  `};
  
  ${({ isActive }) => isActive && css`
    background-color: ${({ activeBackground }) => activeBackground};
    height: 115px;
    width: 115%;
    z-index: 1;
    
    @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
      transform: scale(1.1);
    }
  `}
`;

export const PageWrapper = styled.article`
  margin: 1.5rem;
  
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    margin: 1rem auto;
    max-width: 60rem;
    padding: 3rem 0 3rem 10rem;
    width: 100%;
  }
`;

export const Media = styled(Square)`
  color: #ffffff;
  height: 80px;
  margin-right: 0.5rem;
  width: 100px;
  
  &:hover {
    transform: scale(1.05);
    transition: transform .2s;
    transform-origin: center;
  }
`;

export const Medias = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const AboutParagraph = styled(Paragraph)`
  margin-top: 3rem;
`;

export const AboutTitle = styled(Title)`
  font-size: calc(2rem + 1vw);
  font-weight: bold;
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: calc(1rem + 0.2vw);
`;