// Define graphql schema
const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    hello: String
    categories: [String]
    random(category: String): Category
  }
  type Category {
    categories: [String]!
    created_at: String
    icon_url: String
    id: String!
    updated_at: String
    url: String
    value: String
  }
`;

module.exports = typeDefs;
