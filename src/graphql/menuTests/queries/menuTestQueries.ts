import { gql } from 'apollo-boost';
import { MENU_TEST_FRAGMENT } from 'graphql';

export const MENU_TEST_QUERY = gql`
  query conferences {
    conferences {
      ...conference
    }
  }

  ${MENU_TEST_FRAGMENT}
`;
