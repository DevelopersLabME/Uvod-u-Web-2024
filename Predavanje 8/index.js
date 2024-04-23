/** @format */

// ------------------- Cards

let container = document.getElementById("cardContainer");

function createCharacterCard(character) {
  const card = document.createElement("div");
  const image = document.createElement("img");

  image.src = character.image;
  image.alt = character.name;

  card.appendChild(image);

  return card;
}

// ------------------- XMLHttpRequest

// let request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   if (request.readyState === 4 && request.status === 200) {
//     let data = JSON.parse(request.responseText);
//     data.results.forEach((character) => {
//       const card = createCharacterCard(character);
//       container.appendChild(card);
//     });
//   }
// });

// request.open("GET", "https://rickandmortyapi.com/api/character");
// request.send();

// request.addEventListener("load", () => {
//   console.log(request);
// });

// ------------------- setTimeout

// console.log("Start");

// setTimeout(() => {
//   console.log("First setTimeout executed after 2000ms");
//   setTimeout(() => {
//     console.log("Nested");
//   }, 1000);
// }, 2000);

// setTimeout(() => {
//   console.log("Second setTimeout executed after 1000ms");
// }, 1000);

// console.log("End");

// ------------------- Promise

// function largerThanTen(num) {
//   let myPromise = new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve({ bool: true, message: "Given number is larger than 10!" });
//     } else {
//       reject({ bool: false, message: "Given number is not larger than 10 :(" });
//     }
//   });
//   return myPromise;
// }

// largerThanTen(1)
//   .then((data) => console.log(data.message))
//   .catch((error) => console.log(error.message));

// ------------------- Fetch

let actionButton = document.getElementById("actionBtn");

actionButton.addEventListener("click", async () => {
  try {
    let results = await fetch("https://rickandmortyapi.com/api/character");
    let res = await results.json();
    let characters = res.results;
    characters.forEach((char) => {
      const card = createCharacterCard(char);
      container.appendChild(card);
    });
  } catch (err) {
    console.log("Something went wrong!");
  }
});

// let results = fetch("https://rickandmortyapi.com/api/character");
// results
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Something went wrong");
//   })
//   .then((data) => {
//     let characters = data.results;
//     characters.forEach((character) => {
//       const card = createCharacterCard(character);
//       container.appendChild(card);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
