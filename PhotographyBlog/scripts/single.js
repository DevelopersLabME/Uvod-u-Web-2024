const postContainer = document.getElementById("post-container");

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const postForId = photographyBlogPosts.filter(post => post.id === id)[0];

function generateSinglePost(imageLink, title, author, date, description){
    return `<div>
                <div class="img-wrapper"><img src="${imageLink}" alt="${title}"></div>
                <p class="author-name">Author: ${author}</p>
            </div>
            <div class="post-details">
                <h2>${title}</h2>
                <p class="date-created">Published on ${formatDate(date)}</p>
                <p class="blog-text">${description}</p>
            </div>`
}

postContainer.innerHTML += generateSinglePost(
    postForId.imageLink,
    postForId.title,
    postForId.author,
    postForId.date,
    postForId.description,
)
