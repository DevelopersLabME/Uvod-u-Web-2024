/** @format */

const accessToken = localStorage.getItem("accessToken");

let menuList = document.getElementById("menu");

if (accessToken) {
  let itemsToRemove = menuList.querySelectorAll("li.not-auth");
  itemsToRemove.forEach(function (item) {
    menuList.removeChild(item);
  });

  let signOutItem = document.createElement("li");
  signOutItem.innerHTML = '<a onClick="signOut()">Sign out</a>';

  let adminItem = document.createElement("li");
  adminItem.innerHTML = '<a href="./admin.html">Admin</a>';

  menu.appendChild(signOutItem);
  menu.appendChild(adminItem);
} else {
  let signInItem = document.createElement("li");
  signInItem.innerHTML = '<a class="not-auth" href="./login.html">Sign in</a>';

  let registerItem = document.createElement("li");
  registerItem.innerHTML =
    '<a class="not-auth" href="./register.html">Register</a>';

  menu.appendChild(signInItem);
  menu.appendChild(registerItem);
}

function signOut() {
  localStorage.clear();
  location.reload();
}
