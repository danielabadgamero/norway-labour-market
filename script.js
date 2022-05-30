const container = document.querySelector("main");
const buttons = [...document.querySelector("header").querySelectorAll("button")];
const spanishParagraphs = [...document.getElementsByClassName("spanish")];
const englishParagraphs = [...document.getElementsByClassName("english")];
let lang = "spanish";

function changeTab(tab) {
  [...container.children].forEach(element => {
    element.classList.add("hidden");
  })
  if (tab === "home") {
    container.style.background = "url(./https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/norway/oslo/destinations-oslo-banner-mobile-1024x553.jpg')";
  } else {
    container.style.background = "hsl(228, 100%, 11%)";
  switch (tab) {
    case "btn1":
      document.querySelector("div.introduccion").classList.remove("hidden");
      break;
    case "btn2":
      document.querySelector("div.desempleo").classList.remove("hidden");
      break;
    case "btn3":
      document.querySelector("div.medidas").classList.remove("hidden");
      break;
    case "btn4":
      document.querySelector("div.opinion").classList.remove("hidden");
      break;
    case "home":
      document.querySelector("div.homepage").classList.remove("hidden");
      break;
    case "btn5":
      document.querySelector("div.about").classList.remove("hidden");
      break;
    case "btn6":
      document.querySelector("div.bibliografia").classList.remove("hidden");
      break;
    case "select1":
      document.querySelector("div.tipos").classList.remove("hidden");
      break;
    case "select2":
      document.querySelector("div.noruega").classList.remove("hidden");
      break;
  }
}

function changeLanguage(language) {
  switch (language) {
    case "spanish":
      spanishParagraphs.map((para) => {
        para.classList.remove("hidden");
      });
      englishParagraphs.map((para) => {
        para.classList.add("hidden");
      });
      break;
    case "english":
      spanishParagraphs.map((para) => {
        para.classList.add("hidden");
      });
      englishParagraphs.map((para) => {
        para.classList.remove("hidden");
      });
  }
}

buttons.map((button) => button.addEventListener("click", (e) => {
  if (!e.target.id) {
    changeTab(e.target.parentElement.id);
  } else {
    changeTab(e.target.id);
  }
}));

buttons[1].addEventListener("mouseenter", () => {
  document.querySelector("div.select").classList.remove("hidden");
})

document.querySelector("div.select").addEventListener("mouseleave", () => {
  document.querySelector("div.select").classList.add("hidden");
})

document.getElementById("change-lang").addEventListener("click", () => {
  if (lang === "spanish") {
    document.getElementById("change-lang").style.backgroundImage="url(./media/uk-flag.png)";
    lang = "english"
  } else {
    document.getElementById("change-lang").style.backgroundImage="url(./media/spain-flag.png)";
    lang = "spanish"
  }
  changeLanguage(lang);
})
