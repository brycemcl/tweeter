window.addEventListener('load', (event) => {
  document.querySelector('#tweet-text').addEventListener('input', (event) => {
    document.querySelector("#counter").value = (140 - document.querySelector('#tweet-text').value.length).toString();
  });
});