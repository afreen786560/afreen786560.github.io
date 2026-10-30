const themes = {
  blue:   { main: "#1e5bd8", dark: "#143f9c", light: "#e3ecff", name: "Blue" },
  green:  { main: "#1f9d4d", dark: "#146b33", light: "#e0f5e8", name: "Green" },
  yellow: { main: "#e6b800", dark: "#a88700", light: "#fff8d6", name: "Yellow" }
};

const themeName = document.getElementById("themeName");
const resultBox = document.getElementById("resultBox");
const errorMsg  = document.getElementById("errorMsg");

function setTheme(key) {
  const t = themes[key];
  const root = document.documentElement;

  root.style.setProperty("--main", t.main);
  root.style.setProperty("--dark", t.dark);
  root.style.setProperty("--light", t.light);

  themeName.textContent = t.name;
  resultBox.textContent = t.name;
  errorMsg.textContent = "";
}

document.querySelectorAll(".navbar a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    setTheme(this.dataset.theme);
  });
});

document.getElementById("loginBtn").addEventListener("click", function () {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    errorMsg.textContent = "";
    resultBox.textContent = "Login Successful";
  } else {
    errorMsg.textContent = "Login failed!!";
    resultBox.textContent = "Login Failed!!";
  }
});

setTheme("blue");