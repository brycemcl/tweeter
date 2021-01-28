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
<link rel="stylesheet" href="/components/nav-bar/nav-bar.css" />
<nav>
<span class="logo">tweeter</span>
<span> <strong>Write</strong> a new tweet</span>
</nav>
<div class="undernav"></div>
`;

  class Nav extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      // this.shadowRoot.querySelector('div img').src = this.getAttribute('profile-src');
      // this.shadowRoot.querySelector('div h2').innerText = this.getAttribute('profile-name');
    }
  }
  window.customElements.define('nav-bar', Nav);
})();
