import React from "react"
import * as S from "./home.styles"

const Home = () => (
    <S.Wrapper>
      <S.HomeTitle>
        <S.Bold>João Guilherme </S.Bold>
        is a
        frontend developer from Rio
        de Janeiro, Brazil. He works at
        <S.Link href="http://www.paretogroup.com.br" target="_blank"> Pareto Group </S.Link>
        and loves code beautifully things.
      </S.HomeTitle>
    </S.Wrapper>
);

export default Home