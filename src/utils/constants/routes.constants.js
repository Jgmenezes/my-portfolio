import {
  DARK_PURPLE,
  EMERALD,
  MULLBERRY,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERCIARY_COLOR,
} from './color.constants';

import AvatarImage from '../../../static/assets/img/avatar.svg'
import ProjectImage from '../../../static/assets/img/project.svg';
import AboutImage from '../../../static/assets/img/about.svg';

const ROUTES = [{
  TO: '/',
  ACTIVE_BACKGROUND: PRIMARY_COLOR,
  BACKGROUND: SECONDARY_COLOR,
  IMAGE: AvatarImage,
  LABEL: 'Home',
}, {
  TO: '/projects/',
  ACTIVE_BACKGROUND: MULLBERRY,
  BACKGROUND: TERCIARY_COLOR,
  IMAGE: ProjectImage,
  LABEL: 'Projects',
}, {
  TO: '/about/',
  ACTIVE_BACKGROUND: EMERALD,
  BACKGROUND: DARK_PURPLE,
  IMAGE: AboutImage,
  LABEL: 'About',
}];

export default ROUTES;