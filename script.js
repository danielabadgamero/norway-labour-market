const container = document.querySelector("main");
const buttons = [...document.querySelector("header").querySelectorAll("button")];

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
