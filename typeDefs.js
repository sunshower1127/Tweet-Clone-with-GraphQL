import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
    """
    Full name of the user
    """
    fullName: String!
  }

  type Tweet {
    id: ID!
    text: String!
    author: User!
  }

  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }

  type Mutation {
    """
    post a tweet
    """
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;
