var tabsContainer = document.getElementById("tabs-container");
var postsList = document.getElementById("posts-list");

// ==========================================

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        users.forEach(function (user) {
            var button = document.createElement("button");

            button.textContent = user.name;

            button.classList.add("tab-btn");

            button.onclick = function () {
                var currentActive = document.querySelector(".tab-btn.active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                button.classList.add("active");

                getUserPosts(user.id);
            };

            tabsContainer.append(button);
        });
    })
    .catch(function (error) {
        console.log("Error fetching users:", error);
    });


// ==========================================

async function getUserPosts(userId) {
    try {
        postsList.innerHTML = "";
        var response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        var posts = await response.json();

        posts.forEach(function (post) {
            var li = document.createElement("li");
            li.textContent = post.title;
            postsList.append(li);
        });

    } catch (error) {
        console.log("Error fetching posts:", error);
        postsList.innerHTML = `<li style="color:red">Failed to load posts!</li>`;
    }
}