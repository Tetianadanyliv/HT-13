const infGenerButton = document.querySelector(".buttongnr");
const infvalue = document.querySelector(`.infvalue`);

function* infGenerator() {
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}
const infGener = infGenerator();

infGenerButton.onclick = () => {
  infvalue.innerHTML = infGener.next().value;
};

// Сhange the font size of the text

const btnup = document.querySelector(".btnup");
const btndown = document.querySelector(".btndown");
const text = document.querySelector(".text");

function* newFontGenerSize(fs) {
  let currSize = fs;
  let size = yield currSize;
  while (true) {
    for (let i = 0; i < Infinity; i++) {
      if (size === "up") {
        currSize += 2;
        size = yield currSize;
      }
      if (size === "down") {
        currSize -= 2;
        size = yield currSize;
      }
    }
  }
}
const fontSizeGen = newFontGenerSize(20);

btnup.onclick = () => {
  text.style.fontSize = fontSizeGen.next(`up`).value + "px";
};

btndown.onclick = () => {
  text.style.fontSize = fontSizeGen.next(`down`).value + "px";
};
