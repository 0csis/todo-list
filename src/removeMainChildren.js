// Clean up the to-dos from the screen in order to bring a new one and
// show it among the others in chronological order
function removeMainChildren() {
  const main = document.querySelector('.main');

  if (main.hasChildNodes()) {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
  }
}

export { removeMainChildren };