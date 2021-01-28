import jquery from 'https://cdn.skypack.dev/jquery';
const $ = jquery;
import renderTweets from '/scripts/renderTweets.js';
export default () => {
  $.get("/tweets", (data) => {
    renderTweets(data);
  });
};
