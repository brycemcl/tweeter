import jquery from 'https://cdn.skypack.dev/jquery';
const $ = jquery;
const renderTweets = function (tweets) {
  $(".tweets").empty();
  tweets.reverse().forEach(tweet => {
    const newTweet = $("<tweet-user></tweet-user>");
    $(newTweet).attr({
      "user-profile-image": tweet.user.avatars,
      "user-profile-name": tweet.user.name,
      "user-profile-handle": tweet.user.handle,
      "contents": tweet.content.text,
      "info-date": tweet.created_at,
    });
    $(".tweets").append(newTweet);
  });
};

export default renderTweets;