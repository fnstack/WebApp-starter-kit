import { gql, DocumentNode } from 'apollo-boost';

export const registerUser: DocumentNode = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password, expiresIn: "1d") {
      token
    }
  }
`;
