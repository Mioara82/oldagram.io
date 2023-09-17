const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        alt: "portrait of van Gogh",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const likesArray = [];

const postMain = document.getElementById("main-section")

if(postMain) {
    posts.forEach((post,index) => {
        const postSection = document.createElement("section");
        postSection.classList.add("info-post");

        const postContainer = document.createElement("div");

        //create the HTML main section

        postSection.innerHTML = `
            <img class="small-img" src=${post.avatar}>
                    <div class="text">
                        <p class="bold small-txt">${post.name}</p>
                        <p class="small-txt">${post.location}</p>
                    </div>
                    
                <div id="post-el" class="post">
                    <img class="main-img" alt="portrait of VanGogh" src=${post.post}>
                </div>
                
                <div class="content">
                    <div class="icons">
                        <img class="small-icon like-el" src="images/icon-heart.png" alt="heart symbol">
                        <img class="small-icon" src="images/icon-comment.png" alt="comment symbol">
                        <img class="small-icon" src="images/icon-dm.png" alt="dm symbol">
                    </div>
                    <p class="bold small-txt count-like-el">${post.likes}<span>likes</span></p>
                    <p class="small-txt"><span class="bold">${post.username}</span> ${post.comment}</p>
                `;

//append the section to the main element of HTML

postMain.appendChild(postSection);

//create the countLikes function

const likeEl = postSection.querySelector(".like-el");

const countLikeEl = postSection.querySelector(".count-like-el");

likesArray[index] = post.likes;

let isLiked = false;

likeEl.addEventListener("click", function() {
    if (!isLiked) {
        likesArray[index] += 1;
        //change the color to red if liked
        likeEl.src = "images/red-heart.png";
        isLiked = true;
       countLikeEl.textContent = `${likesArray[index]} likes` ;
    }
});
});
}


