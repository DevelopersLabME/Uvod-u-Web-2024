const createPostBtn = document.getElementById("createPostBtn");

createPostBtn.addEventListener("click", function(){
    const formData = new FormData();

    const imageField = document.getElementById("image");
    const titleField = document.getElementById("title");
    const descriptionField = document.getElementById("description");

    const title = titleField.value;
    const description = descriptionField.value;

    const image = imageField.files[0];

    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);

    const accessToken = localStorage.getItem("accessToken");
    
    fetch("https://dev-lab.dev/api/posts/", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
        body: formData
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        // TODO Handle errors.
    })
    .then(data => {
        document.location.href = "index.html"
    })

})