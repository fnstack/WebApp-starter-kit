import { gql } from 'apollo-boost';

export const MENU_TEST_FRAGMENT = gql`
  fragment conferences on conference {
    id
    dateEnd
    dateStart
    description
    edition
    location
    locationUrl
    name
  }
`;
