let tweets = [
  {
    id: 1,
    text: "Hello World",
    userId: "2",
  },
  {
    id: 2,
    text: "Hi, GraphQL",
    userId: "1",
  },
];

function addTweet(tweet) {
  tweets.push(tweet);
}

function getAllTweets() {
  return tweets;
}

function getTweet(id) {
  return tweets.find((tweet) => tweet.id === id);
}

function deleteTweet(id) {
  const cleanedTweets = tweets.filter((tweet) => tweet.id !== id);
  if (cleanedTweets.length < tweets.length) {
    tweets = cleanedTweets;
    return true;
  } else {
    return false;
  }
}

export default { addTweet, deleteTweet, getAllTweets, getTweet };
