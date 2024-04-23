/** @format */

let loginBtn = document.getElementById("signInBtn");

loginBtn.addEventListener("click", () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let payloadData = {
    username: username,
    password: password,
  };

  if (username.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  fetch("https://dev-lab.dev/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloadData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      return response.json();
    })
    .then((data) => {
      const { access, refresh } = data;

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      document.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Login failed:", error);

      let error_msg = document.createElement("span");
      error_msg.classList.add("red");
      error_msg.innerHTML = "Incorrect credentials!";

      let form = document.getElementById("loginForm");
      form.appendChild(error_msg);

      document.getElementById("username").style.borderColor = "red";
      document.getElementById("password").style.borderColor = "red";
    });
});

let response = new XMLHttpRequest();
