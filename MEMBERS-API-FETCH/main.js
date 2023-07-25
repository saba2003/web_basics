const row = document.querySelector('.row')
const button = document.querySelector('.btn')

let i = 0

button.addEventListener('click', () => {
    // APIის წაკითხვა ყველაზე მარტივად
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((todos_data) => {
        row.innerHTML += `
            <div class="col-3 todo">
                <p class="todo-title">${todos_data[i].title}</p>
            </div>
            `   
        i++
    })
})
