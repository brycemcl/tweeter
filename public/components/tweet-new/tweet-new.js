import jquery from 'https://cdn.skypack.dev/jquery';
const $ = jquery;
import updatePage from '/scripts/updatePage.js';
import checkIfValidTweet from '/scripts/checkIfValidTweet.js';
const template = document.createElement("template");
template.innerHTML =
  `
<!-- fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Bungee&family=Source+Sans+Pro:ital,wght@0,300;0,600;1,300;1,600&display=swap"
  rel="stylesheet"
/>
<!-- normalize css -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
  type="text/css"
/>
<!-- project css -->
<link rel="stylesheet" href="/styles/layout.css" type="text/css" />
<!-- component css -->
<link rel="stylesheet" href="/components/tweet-new/tweet-new.css" />
<form class="tweet">
<label class="tweet-label" for="tweet-text"
  >What are you humming about?</label
>
<div name="text" id="tweet-text" contenteditable="true"></div>
<div class="actions">
  <button type="submit">Tweet</button>
  <output name="counter" class="counter" id="counter" for="tweet-text"
    >140</output
  >
</div>
</form>
`;
class Tweet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const shadowRoot = this.shadowRoot;
    const counter = shadowRoot.querySelector("#counter");
    this.shadowRoot.querySelector('#tweet-text').addEventListener("input", function (event) {
      const remainingCharacters = 140 - this.innerText.length;
      if (remainingCharacters >= 0) {
        counter.classList.remove("over-characters");
      } else {
        counter.classList.add("over-characters");
      }
      counter.innerText = remainingCharacters.toString();
    });
    const form = this.shadowRoot.querySelector('form');
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const tweet = { text: this.shadowRoot.querySelector('#tweet-text').innerText };
      if (checkIfValidTweet(tweet).valid) {
        $.post("/tweets", $.param(tweet)).done(() => {
          updatePage();
          this.shadowRoot.querySelector('#tweet-text').innerText = "";
          counter.innerText = 140;
        });
      } else {
        alert(checkIfValidTweet(tweet).error);
      }
    });
  }
}
window.customElements.define('tweet-new', Tweet);
