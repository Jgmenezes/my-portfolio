import styled, { css } from 'styled-components';

import { DARK_PURPLE } from '../../utils/constants/color.constants';

const defaultTextStyle = css`
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", sans-serif;
`;

export const Title = styled.h1`
  color: ${DARK_PURPLE};
  font-size: calc(1rem + .5vw);
  ${defaultTextStyle};
`;

export const Subtitle = styled.h3`
  color: ${DARK_PURPLE};
  font-size: calc(.7rem + .5vw);
  font-weight: 400;
  ${defaultTextStyle};
`;

export const Paragraph = styled.p`
  color: ${DARK_PURPLE};
  font-size: calc(1rem + .7vw);
  font-weight: 400;
  line-height: calc(1.5rem + 0.5vw);
  ${defaultTextStyle};
`;