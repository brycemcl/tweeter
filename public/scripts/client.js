$(() => {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function (tweets) {
    $(".tweets").empty();
    tweets.forEach(tweet => {
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
  renderTweets(data);

});