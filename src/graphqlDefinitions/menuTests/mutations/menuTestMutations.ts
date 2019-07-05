import { gql } from 'apollo-boost';

export const CREATE_ABSENCE_REASON_MUTATION = gql`
  mutation{
    createAddress ($city: String!, $country: String!, $houseNumber: String!,
       $latitude: Float!, $longitude: Float!, $streetName: String!,
      $zipCode: String!, $venueId: String!)
    (city: $city, country: $country, houseNumber: $houseNumber,
       latitude: $latitude, longitude: $longitude, streetName: $streetName,
      zipCode: $zipCode, venueId: $venueId, venue: $venue){
    }
  }
`;
