import styled, { css, keyframes } from "styled-components"
import { Link } from "gatsby"
import MEDIA_QUERIES from "../../../../utils/constants/mediaQuerie.constants";

export const Wrapper = styled(Link)`
  align-items: center;
  background: ${({ background }) => background};
  cursor: pointer;
  display: flex;
  flex: 100%;
  flex-direction: column;
  height: 110px;
  justify-content: center;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  width: 100%;
  
  @media ${MEDIA_QUERIES.DESKTOP_SCREEN} {
    height: 100%;
  };
  
  ::before {
    border-radius: 50%;
    content: '';
    display: block;
    height: 40px;
    position: absolute;
    transition: all 0.25s linear;
    width: 40px;
  };
  
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
  `};
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

export const Title = styled.span`
    color: #ffffff;
    font-size: calc(0.6rem + 0.5vw);
    margin-top: 5px;
    z-index: 1;
    font-family: "Helvetica Neue", sans-serif;
`;