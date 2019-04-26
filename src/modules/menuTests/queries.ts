import { gql, DocumentNode } from 'apollo-boost';

export const getAllUsers: DocumentNode = gql`
  query {
    allUsers(count: 25) {
      id
      firstName
      lastName
      email
      avatar
    }
  }
`;
