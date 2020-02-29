import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { PageWrapper } from "../About/about.styles"
import * as S from "./projects.styles"
import { Subtitle } from "../Texts/texts"

const Projects = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query ProjectsList {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                  description
                  image {
                    childImageSharp {
                        fixed(width: 64, height: 64) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                  }
                  name
                }
                html
              }
          }
        }
    }`)

    const projectList = allMarkdownRemark.edges

    return (
        <PageWrapper>
             {projectList.map(({
                node: {
                    frontmatter: {
                        name,
                        description,
                        image
                    },
                    html
                }
             }) => (
                 <S.Wrapper>
                    <S.ArticleHeader>
                        <S.Image fixed={image.childImageSharp.fixed} />
                        <S.ArticleTitleWrapper>
                            <S.BoldTitle>{name}</S.BoldTitle>
                            <Subtitle>{description}</Subtitle>
                        </S.ArticleTitleWrapper>
                    </S.ArticleHeader>
                     <S.ProjectWrapper>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                     </S.ProjectWrapper>
                 </S.Wrapper>
            ))}
        </PageWrapper>
    )
}

export default Projects
