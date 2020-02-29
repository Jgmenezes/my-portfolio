import styled from "styled-components"
import Img from "gatsby-image"

import { Title } from "../Texts/texts";

export const Wrapper = styled.div`
    margin-bottom: 80px;
`;

export const Image = styled(Img)`
    margin-right: 15px;
`;

export const ArticleTitleWrapper = styled.div``;

export const ArticleHeader = styled.header`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`;

export const ProjectWrapper = styled.div`    
    p {
        color: #1A1A29;
        font-size: calc(1rem + 0.3vw);
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        line-height: calc(1.1rem + 1vw);
        margin-bottom: 10px;
    }
    
    .gatsby-resp-image-wrapper {
        margin-bottom: 20px;
    }
`;

export const BoldTitle = styled(Title)`
    font-weight: bold;
    margin-bottom: 3px;
`;
