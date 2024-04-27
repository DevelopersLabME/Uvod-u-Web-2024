const postContainer = document.getElementById("post-container");

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

function generateSinglePost(imageLink, title, author, date, description){
    // TODO Create elements using DOM methods.
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

fetch(`https://dev-lab.dev/api/posts/${id}`)
.then(res => res.json())
.then(data => {
    postContainer.innerHTML += generateSinglePost(
        `https://dev-lab.dev/${data.image}`,
        data.title,
        data.author,
        data.date_created,
        data.description,
    )
})


