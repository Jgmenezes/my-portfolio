import React from "react"
import * as S from "./navigation.styles"
import ROUTES from "../../../utils/constants/routes.constants";
import NavigationItem from "./NavigationItem/navigation-item";

const Navigation = () => (
     <S.HeaderWrapper>
          <S.Navigation>
            <S.List>
                {ROUTES.map(({
                    ACTIVE_BACKGROUND,
                    BACKGROUND,
                    IMAGE,
                    LABEL,
                    TO,
                  }) => (
                    <NavigationItem
                        activeBackground={ACTIVE_BACKGROUND}
                        background={BACKGROUND}
                        image={{ alt: '', src: IMAGE }}
                        title={LABEL}
                        to={TO}
                    />
                ))}
            </S.List>
          </S.Navigation>
     </S.HeaderWrapper>
);

export default Navigation;

