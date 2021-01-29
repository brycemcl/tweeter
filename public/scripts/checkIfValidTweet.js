const checkIfValidTweet = (tweet) => {
  const { text } = tweet;
  if (text.length === 0) {
    return { valid: false, error: "Tweet needs to contain something." };
  } else if (text.length > 140) {
    return { valid: false, error: "Tweet can only contain 140 characters." };
  } else if (!text) {
    return { valid: false, error: "We are not sure what went wrong." };
  } else {
    return { valid: true };
  }
};
export default checkIfValidTweet;