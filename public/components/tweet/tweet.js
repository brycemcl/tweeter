(() => {
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
<link rel="stylesheet" href="/components/tweet/tweet.css" />
<!-- fontawesome -->
<link rel="stylesheet" href="/fontawesome/css/all.css" />
<!-- inner html -->
<div class="tweet">
  <div class="tweet-user">
    <div class="tweet-user-profile">
      <img alt="Profile Picture" />
      <p></p>
    </div>
    <div class="tweet-user-handle">
      <p></p>
    </div>
  </div>
  <div class="tweet-contents">
    <p></p>
  </div>
  <div class="tweet-info">
    <div class="tweet-info-date">
      <p></p>
    </div>
    <div class="tweet-info-actions">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </div>
</div>  
`;
  class Tweet extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector('.tweet-user-profile p').innerText = this.getAttribute('user-profile-name');
      this.shadowRoot.querySelector('.tweet-user-profile img').src = this.getAttribute('user-profile-image');
      this.shadowRoot.querySelector('.tweet-user-handle p').innerText = this.getAttribute('user-profile-handle');
      this.shadowRoot.querySelector('.tweet-contents p').innerText = this.getAttribute('contents');
      this.shadowRoot.querySelector('.tweet-info-date p').innerText = this.getAttribute('info-date');
    }
  }
  window.customElements.define('tweet-user', Tweet);
})();
