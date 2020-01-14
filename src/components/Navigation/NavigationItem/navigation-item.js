import React from "react"
import { shape, string } from "prop-types"
import { Location } from '@reach/router';
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
    image,
    title,
    to,
}) => (
    <Location>
        {locationProps => (
            <S.Wrapper
                activeBackground={activeBackground}
                background={background}
                isActive={locationProps.location.pathname === to}
                to={to}
            >
              <S.Image alt={image.alt} src={image.src} />
              <S.Title>{title}</S.Title>
            </S.Wrapper>
        )}
    </Location>
)

NavigationItem.propTypes = propTypes

export default NavigationItem