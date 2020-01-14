import React from "react"
import { shape, string } from "prop-types"
import * as S from "./navigation-item.styles"

const propTypes = {
  image: shape({
    alt: string,
    src: string,
  }).isRequired,
  title: string.isRequired,
}

const NavigationItem = ({
    activeBackground,
    background,
    isActive,
    image,
    title,
    to,
}) => (
    <S.Wrapper
        activeBackground={activeBackground}
        background={background}
        to={to}
        isActive={isActive}
    >
      <S.Image alt={image.alt} src={image.src} />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
)

NavigationItem.propTypes = propTypes

export default NavigationItem