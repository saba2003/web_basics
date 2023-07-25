// const users = [
//     {
//         first_name: "Davit",
//         last_name: "Gigauri",
//         password: "123123",
//         disabled: false
//     },
//     {
//         first_name: "B",
//         last_name: "BB",
//         password: "123123",
//         disabled: false
//     },
//     {
//         first_name: "X",
//         last_name: "XX",
//         password: "123123",
//         disabled: true
//     },
// ]

// const activeUsers = users.filter(function(user) {
//     return user.disabled === false
// })

// console.log(activeUsers, "THIS ACTIVE USERS")


// const x = 11
// const y = 12

// if (x > y) {
//     console.log(x, "THIS X")
// } else if (x === y) {
//     console.log("===")
// } else {
//     console.log(y, "THIS Y")
// }

// const x = 11
// const color = x > 10 ? "green" : "red"

// const color = "sdsds"

// switch (color) {
//     case "red":
//         console.log("RED")

//         break
//     case "blue":
//         console.log("BLUE")

//         break
//     case "green":
//         console.log("GREEN")

//         break
//     default:
//         console.log("DEFAULT")

//         break
// }

// function addNums(num1, num2) {
//     return num1 + num2
// }

// const addNums = (num1, num2) => num1 + num2

// console.log(addNums(4, 6))

// function addNumebers(number) {
//     return number + 5
// }

// console.log(addNumebers(5))

function Person(first_name, last_name, birth_date) {
    this.first_name = first_name
    this.last_name = last_name
    this.birth_date = new Date(birth_date)
    this.created_at = new Date(Date.now())
    // this.full_name = `${first_name} ${last_name}`
}

Person.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
}

const person1 = new Person("Davit", "Gigauri", "11-2-1999")

console.log(person1, "THIS PERSON 1")

