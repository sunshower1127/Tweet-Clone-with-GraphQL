import tweetDb from "./tweetDb.js";
import userDb from "./userDb.js";

export default {
  Query: {
    allTweets() {
      return tweetDb.getAllTweets();
    },
    // tweet: (root, args) => { 형식으로 쓸 수도 있음.
    tweet(_root, { id }) {
      return tweetDb.getTweet(id);
    },
    allUsers() {
      return userDb.getAllUsers();
    },
  },

  Mutation: {
    postTweet(_root, { text, userId }) {
      const newTweet = {
        id: tweetDb.getAllTweets().length + 1 + "",
        text,
        userId,
      };
      tweetDb.addTweet(newTweet);
      return newTweet;
    },

    deleteTweet(_root, { id }) {
      return tweetDb.deleteTweet(id);
    },
  },

  User: {
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },

  Tweet: {
    author({ userId }) {
      return userDb.getAllUsers().find((user) => user.id === userId);
    },
  },
};
