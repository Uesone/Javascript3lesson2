document.addEventListener("DOMContentLoaded", function () {
  const userName = localStorage.getItem("username");
  if (userName) {
    document.getElementById("userName").innerText = "User: " + userName;
  }

  let counter = sessionStorage.getItem("counter");
  if (!counter) {
    counter = 0;
  } else {
    counter = parseInt(counter);
  }

  document.getElementById("counter").innerText = counter;

  setInterval(() => {
    counter++;
    sessionStorage.setItem("counter", counter);
    document.getElementById("counter").innerText = counter;
  }, 1000);

  document.getElementById("saveButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    document.getElementById("userName").innerText = "User salvato: " + username;
  });

  document
    .getElementById("removeButton")
    .addEventListener("click", function () {
      localStorage.removeItem("username");
      document.getElementById("userName").innerText = "";
    });
});
