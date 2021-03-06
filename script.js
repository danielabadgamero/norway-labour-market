console.log("I decided I don't care about the drop down menu of \"2. El desempleo\" so I'll leave it as it is. No extra buttons no dumb stuff.");

const container = document.querySelector("main");
const buttons = [...document.querySelector("header").querySelectorAll("button")];

function changeTab(tab) {
  [...container.children].forEach(element => {
    element.classList.add("hidden");
  });
  if (tab === "home") {
    container.style.background = "url('./destinations-oslo-banner-mobile-1024x553.jpg')";
    container.style.paddingLeft = "200px";
    container.style.paddingRight = "700px";
    container.style.color = "black";
    container.style.backgroundSize = "100%";
  } else {
    container.style.background = "hsl(228, 100%, 11%)";
    container.style.paddingLeft = "500px";
    container.style.paddingRight = "500px";
    container.style.color = "white";
  }
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

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        if (!e.target.id) {
            changeTab(e.target.parentElement.id); // if user clicks outside of the text
        } else {
            changeTab(e.target.id); // if user clicks on the text
        }
    });
});

buttons[1].addEventListener("mouseenter", () => {
  document.querySelector("div.select").classList.remove("hidden");
})

document.querySelector("div.select").addEventListener("mouseleave", () => {
  document.querySelector("div.select").classList.add("hidden");
})

document.querySelector(".header-image").addEventListener("mouseenter", () => {
  document.querySelector("div.select").classList.add("hidden");
})

