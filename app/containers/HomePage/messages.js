/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  github: {
    id: `${scope}.github`,
    defaultMessage: 'Github',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'search',
  },
});
