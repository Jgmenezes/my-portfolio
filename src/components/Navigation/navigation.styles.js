import styled, { keyframes } from "styled-components"
import MEDIA_QUERIES from "../../utils/constants/mediaQuerie.constants"

export const Label = styled.span`
  color: #ffffff;
  font-size: calc(0.6rem + 0.5vw);
  margin-top: 5px;
  z-index: 1;
`;

export const Item = styled.li`
  display: flex;
  flex: 100%;
  transition: all 0.5s ease;
`;

export const Navigation = styled.nav`
  display: flex;
  flex: 0 0 75%;
  
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    height: 100%;
  }
`;

export const HeaderWrapper = styled.header`
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 25vh;
  }
`;

export const List = styled.ul`
  display: flex;
  flex: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    flex-direction: column;
  }
`;

const kick = keyframes`
  0% {
    transform: scale(1.01);
  }
  
  50% {
    transform: scale(1.02);
  }
  
  100% {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  height: 75px;
  width: 75px;
  z-index: 1;
  
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    height: 45%;
    width: 100%;
    
    &:hover {
      animation: ${kick} 0.25s forwards;
    }
  }
`;