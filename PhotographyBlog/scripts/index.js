const cardWrapperElement = document.querySelector(".card-wrapper");

// console.log(cardWrapperElement.innerHTML);
// console.log(cardWrapperElement.innerText);
// console.log(cardWrapperElement.textContent);

function generatePost(id, imageLink, title, date, description) {
    // TODO Create elements using DOM methods.
    return `
        <div class="blog-card">
            <img src="${imageLink}" alt="${title}">
            <div class="card-content">
                <h2>${title}</h2>
                <span>${date}</span>
                <p>${description}</p>
                <a href="./single-post.html?id=${id}">Read More >></a>
            </div>
        </div>`
}

fetch("https://dev-lab.dev/api/posts/")
.then(res => res.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        cardWrapperElement.innerHTML += generatePost(
            data[i].id,
            `https://dev-lab.dev/${data[i].image}`,
            data[i].title,
            formatDate(data[i].date_created),
            data[i].description,
        )
    }
})

