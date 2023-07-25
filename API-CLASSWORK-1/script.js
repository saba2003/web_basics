const users_table = document.querySelector('.users-box')
const posts_table = document.querySelector('.users-posts')
const comments_table = document.querySelector('.users-comments')

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            // ===== Create Element <li> ===== //
            const user_li = document.createElement('li')

            // ===== ADD Bootstrap Class ===== //
            user_li.classList.add("attr")
            user_li.classList.add("user")
            
            // ===== PUT Text in <li> tag ===== //
            user_li.appendChild(
                document.createTextNode(
                    `${user.name}`
                )
            )

            user_li.addEventListener("click", () => {
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then((response) => response.json())
                    .then((user_posts) => {
                        posts_table.innerHTML = ""
                        comments_table.innerHTML = ""

                        user_posts.forEach((post) => {

                            // ===== Create Element <li> ===== //
                            const post_li = document.createElement('li')

                            // ===== ADD Bootstrap Class ===== //
                            post_li.classList.add("attr")
                            post_li.classList.add("post")
                            
                            // ===== PUT Text in <li> tag ===== //
                            post_li.appendChild(
                                document.createTextNode(
                                    `${post.title}`
                                )
                            )

                            post_li.addEventListener("click", () => {
                                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                                .then((response) => response.json())
                                .then((user_comments) => {

                                    comments_table.innerHTML = ""
                                    
                                    user_comments.forEach((comment) => {
                                        comments_table.innerHTML += `
                                            <li class="attr comment">${comment.name}</li>
                                        `
                                    })

                                    // ===== PUT this user_li in users-table ===== //
                                })
                            })

                            posts_table.appendChild(post_li)
                        })
                    })
            })

            // ===== PUT this user_li in users-table ===== //
            users_table.appendChild(user_li)
        })
    })
