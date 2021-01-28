import jquery from 'https://cdn.skypack.dev/jquery';
const $ = jquery;
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
<section class="new-tweet">
  <form action="/tweets" method="POST">
    <label for="tweet-text">What are you humming about?</label>
    <textarea name="text" id="tweet-text"></textarea>
    <div>
      <button type="submit">Tweet</button>
      <output name="counter" class="counter" id="counter" for="tweet-text"
        >140</output
      >
    </div>
  </form>
</section>
`;
class Tweet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const shadowRoot = this.shadowRoot;
    this.shadowRoot.querySelector('#tweet-text').addEventListener("input", function (event) {
      const remainingCharacters = 140 - this.value.length;
      const counter = shadowRoot.querySelector("#counter");
      if (remainingCharacters >= 0) {
        counter.classList.remove("over-characters");
      } else {
        counter.classList.add("over-characters");
      }
      counter.value = remainingCharacters.toString();
    });
    const form = this.shadowRoot.querySelector('form');
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // console.log($(this.shadowRoot.querySelector('#tweet-text')).serialize());
      $.post("/tweets", $(this.shadowRoot.querySelector('#tweet-text')).serialize());
    });
  }
}
window.customElements.define('tweet-new', Tweet);
