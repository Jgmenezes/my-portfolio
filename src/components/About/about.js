import React from "react"
import * as S from "./about.styles"
import { PRIMARY_COLOR } from "../../utils/constants/color.constants";

const About = () => (
    <S.PageWrapper>
        <S.AboutTitle>About me</S.AboutTitle>
        <S.AboutParagraph>
            Hi! I'm João Guilherme. I'm currently frontend developer at Pareto Group,
            a company that manages Google Ads and Facebook Ads campaigns.
        </S.AboutParagraph>

        <S.AboutParagraph>
            I’ve been interested in programming and design since second grade,
            when my computer teacher showed animated sites. Since then i've
            had the pleasure of working in companies with big challenges like
            Pareto Group, Órama Investimentos, Crosoften, CSP Consultorias & Sistemas
            and globo.com.
        </S.AboutParagraph>

        <S.Medias>
            <S.Link
                href="https://www.github.com/jgmenezes"
                target="_blank"
            >
                <S.Media background={PRIMARY_COLOR}>Github</S.Media>
            </S.Link>
            <S.Link
                href="https://www.linkedin.com/in/jo%C3%A3o-guilherme-menezes-919154b0/"
                target="_blank"
            >
                <S.Media background={PRIMARY_COLOR}>Linkedln</S.Media>
            </S.Link>
            <S.Link
                href="mailto:jgmenezes@live.com"
                target="_blank"
            >
                <S.Media background={PRIMARY_COLOR}>Email</S.Media>
            </S.Link>
        </S.Medias>
    </S.PageWrapper>
)

export default About