const cardWrapperElement = document.querySelector(".card-wrapper");

// console.log(cardWrapperElement.innerHTML);
// console.log(cardWrapperElement.innerText);
// console.log(cardWrapperElement.textContent);

function generatePost(id, imageLink, title, date, description) {
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

for (let i = 0; i < photographyBlogPosts.length; i++) {
    cardWrapperElement.innerHTML += generatePost(
        photographyBlogPosts[i].id,
        photographyBlogPosts[i].imageLink,
        photographyBlogPosts[i].title,
        formatDate(photographyBlogPosts[i].date),
        photographyBlogPosts[i].description,
    )
}