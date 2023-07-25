//alert("Hello World")

// JavaScript Variables: LET, VAR, CONST

// let first_name = "Davit"
// let last_name = "Gigauri"

// first_name = "giorgi"

// let userName

// const userName = "Davit"

// JavaScript Types: String, Number, Boolean, null, undefined

// const first_name = "Davit"
// const age = 22
// const rating = 4.5
// const isCool = true
// const x = null
// const y = undefined
// let z

// const first_name = "Davit"
// const age = 22 


// console.log("My name is " + first_name + " and i am " + age)

// console.log(`My name is ${first_name} and i am ${age}`)

// const s = "Hello World!"

// console.log(s.length)

// console.log(s.toUpperCase())

// console.log(s.toLowerCase())

// console.log(s.substring(0, 5) + s.substring(5))

// console.log(s.split(""))

// const varaiant = "tech, pcs, it, code, react js, node js"

// console.log(varaiant.split(", "))

// const numbers = new Array(1, 2, 3, 4, 5, 6)

// console.log(numbers)

// const fruits = ["apples", "oranges", "pears"]

// fruits[3] = "grapes"

// fruits.push("mangos")

// fruits.unshift("berries")

// fruits.pop()

// console.log(Array.isArray("grapes"))

// console.log(fruits.indexOf("oranges"))

// console.log(fruits)




// const variant = "technology, computers, it, code, react js, node js"

// const splited_variant = variant.split(", ")

// const react_js_string = splited_variant[4]

// const splited_react_js_string = react_js_string.split(" ")

// const react_string = splited_react_js_string[0]

// const upper_case_react_string = react_string.toUpperCase()

// const react_string_uppercase = variant.split(", ")[4].split(" ")[0].toUpperCase()

// console.log(react_string_uppercase)




// const persons = [{
//     first_name: "Davit",
//     last_name: "Gigauri",
//     age: 22,
//     gender: "Male",
//     password: "$sdjfhbsdjfhbjsdfbjsdbfhjsdb",
//     disabled: false,
//     hobbies: ["music", "movies", "sports"],
//     address: {
//         street: "50 main st",
//         city: "Tbilisi",
//         zip_code: "0192"
//     }
// }]

// const stringed_JSON = JSON.stringify(persons)

// console.log(stringed_JSON, "STINGIFY")

// const parsed_JSON = JSON.parse(stringed_JSON)

// console.log(stringed_JSON, "PARSE")

// const todos = [
//     {
//         id: 1,
//         text: "Take out trash",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: "React JS Library",
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: "Dentist appt",
//         isCompleted: false
//     }
// ]
// for (let todo of todos) {
//     console.log(todo)
// }

// for (let todo_index = 0; todo_index < todos.length; todo_index++) {
//     console.log(todos[todo_index])
// }

// for (let todo_index = 0; todo_index <= 10; todo_index++) {
//     console.log("THIS FOR LOOP INDEX NUMBER: ", todo_index)
// }

// let todo_index = 0

// while (todo_index <= 10) {
//     console.log("THIS WHILE LOOP INDEX NUMBER: ", todo_index)

//     todo_index++
// }

// ========== forEach, map, filter ========== //

// todos.forEach(function(todo) {
//     console.log(todo)
// })

// const todosText = todos.map(function(todo) {
//     return todo.text
// })
// console.log(todosText)

// const completedTodos = todos.filter(function(todo) {
//     return todo.isCompleted === true
// })

// console.log(completedTodos)

// const completedTodosTexts = todos
//     .filter(function(todo) {
//         return todo.isCompleted === true
//     })
//     .map(function(todo) {
//         return todo.text
//     })

// console.log(completedTodosTexts)