window.addEventListener('load', (event) => {
  document.querySelector('#tweet-text').addEventListener('input', (event) => {
    const remainingCharacters = (140 - document.querySelector('#tweet-text').value.length);
    const counter = document.querySelector("#counter");
    if (remainingCharacters >= 0) {
      counter.classList.remove("over-characters");
    } else {
      counter.classList.add("over-characters");
    }
    counter.value = remainingCharacters.toString();
  });
});