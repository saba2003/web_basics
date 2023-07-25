// const usersList = document.querySelector('.users-box')
// const todoList = document.querySelector('.TODOS')

// const userURL = "https://jsonplaceholder.typicode.com/users"
// const todoURL = "https://jsonplaceholder.typicode.com/todos"

// let userArray = []

// fetch(userURL).then((response) => response.json())
//     .then((users_data) => users_data.forEach(user => {
//         usersList.innerHTML += `<div class="attr user">${user.name}</div>`
//         userArray.push(user)
// })).then(getUsersAndListen)

// function getUsersAndListen(){
//     userAttrArray = document.querySelectorAll('.user')

//     userAttrArray.forEach(user => {
//         user.addEventListener('click', () => {
//             todoList.innerHTML = ""

//             const userIdArr = userArray
//                 .filter(user1 => {
//                     return user1.name === user.innerHTML
//                 })
//                 .map(function(user1) {
//                     return user1.id
//                 })
//             const userId = userIdArr[0]

//             fetch(todoURL)
//                 .then((response) => response.json())
//                 .then((todos_data) => todos_data.forEach(todo => {
//                     if(userId === todo.userId){
//                         todoList.innerHTML += `<div class="attr todo">${todo.title}</div>` 
//                     }
//                     // else{
//                     //     console.log(`user id: ${userId} did not match todo id: ${todo.userId}`)
//                     // }
//             }))
//         })
//     })
// }




const users_table = document.querySelector('.users-box')
const todos_table = document.querySelector('.TODOS')

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
            fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
                .then((response) => response.json())
                .then((user_todos) => {
                    todos_table.innerHTML = ""

                    user_todos.forEach((todo) => {
                        todos_table.innerHTML += `
                            <li class="attr todo">${todo.title}</li>
                        `
                    })
                })
            })
            // ===== PUT this user_li in users-table ===== //
            users_table.appendChild(user_li)
        })
    })



// document.querySelector('.user').addEventListener('click', () => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((response) => response.json())
//         .then((todos_data) => todos_data.forEach(todo => {
//             if(userArray[0].id === todo.userId){
//                 todoList.innerHTML += `<div class="attr todo">${todo.title}</div>` 
//                 console.log("id", userArray[0].id)    
//             }
//     }))
// })

// todos.filter(function(todo) {
//     return todo.isCompleted === true
// })
// const completedTodosTexts = todos
//     .filter(function(todo) {
//         return todo.isCompleted === true
//     })
//     .map(function(todo) {
//         return todo.text
//     })

// user.addEventListener('click', () => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((response) => response.json())
//         .then((todos_data) => todos_data.forEach(todo => {
//             if(user.id === todo.userId) 
//             todoList.innerHTML += `<div class="attr todo">${todo.title}</div>`      
//     }))
// })
