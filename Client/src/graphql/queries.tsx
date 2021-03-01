/*
* API Queries
*/

import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories
  }
`;

export const GET_JOKE = gql`
  query random($category: String!) {
    random(category: $category) {
      categories
      created_at
      icon_url
      id
      updated_at
      url
      value
    }
  }
`;
