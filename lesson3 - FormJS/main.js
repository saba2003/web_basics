// SINGLE ELEMENT //
// const form = document.getElementById("my-form")
// const h1 = document.querySelector("h1")

// MULTIPLE ELEMENT //
// const items_with_query_selector = document.querySelectorAll(".item")
// const items_with_classname = document.getElementsByClassName("item")
// const li = document.getElementsByTagName("li")
// items_with_query_selector.forEach((item) => console.log(item))

// const ul = document.querySelector(".items")

// ul.remove()
// ul.firstElementChild.remove()
// ul.lastElementChild.textContent = "HELLO"
// ul.children[1].innerText = "HELLO"
// ul.lastElementChild.innerHTML = "<h1>HELLO</h1>"


// const btn = document.querySelector(".btn")

// btn.addEventListener("click", (event) => {
//     event.preventDefault()

//     btn.style.backgroundColor = 'red'
//     btn.style.borderRadius = '40px'

//     document.querySelector("#my-form").style.backgroundColor = "#ccc"
//     document.querySelector("body").classList.add("bg-dark")

//     document.querySelector(".items").lastElementChild.innerHTML = "<h1>HELLO</h1>"

// })
// btn.addEventListener("mouseover", (event) => {
//     event.preventDefault()

//     btn.style.backgroundColor = 'red'
//     btn.style.borderRadius = '40px'

//     document.querySelector("#my-form").style.backgroundColor = "#ccc"
//     document.querySelector("body").classList.add("bg-dark")

//     document.querySelector(".items").lastElementChild.innerHTML = "<h1>HELLO</h1>"

// })
// btn.addEventListener("mouseout", (event) => {
//     event.preventDefault()

//     btn.style.backgroundColor = 'red'
//     btn.style.borderRadius = '40px'

//     document.querySelector("#my-form").style.backgroundColor = "#f4f4f4"
//     document.querySelector("body").classList.remove("bg-dark")

//     document.querySelector(".items").lastElementChild.innerHTML = "Item 3"

// })


const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const userList = document.querySelector("#users")


const li_items = document.querySelectorAll(".item")


const emailArray = []
const userArray = []

for (let i = 0; i < li_items.length; i++) {
    function User(name, mail) {
        this.name = name
        this.mail = mail
    }

    const splitted_variant = li_items[i].innerHTML.split(" ")
    
    const newUser = new User(splitted_variant[0], splitted_variant[1])
    userArray.push(newUser)
    emailArray.push(splitted_variant[1])
}

myForm.addEventListener("submit", onSubmit)
function onSubmit(event) {
    event.preventDefault()

    if (nameInput.value === "" && emailInput.value === "") {
        msg.classList.add("error")
        msg.innerHTML = "PLEASE ENTER ALL FIELDS"

        setTimeout(function() { 
            msg.classList.remove("error")
            msg.innerHTML = "" 
        }, 5000);

    } else if (nameInput.value === ""){
        msg.classList.add("error")
        msg.innerHTML = "PLEASE ENTER NAME"

        setTimeout(function() { 
            msg.classList.remove("error")
            msg.innerHTML = "" 
        }, 5000);
    }else if (emailInput.value === ""){
        msg.classList.add("error")
        msg.innerHTML = "PLEASE ENTER EMAIL"

        setTimeout(function() { 
            msg.classList.remove("error")
            msg.innerHTML = "" 
        }, 5000);
    }else{

        // 2 გზა ----------------------------------------------

        function User(name, mail) {
            this.name = name
            this.mail = mail
        }
        const newUser = new User(nameInput.value, emailInput.value)

        let checkEmail = true

        userArray.forEach(function(user) {
            if(user.mail === emailInput.value){
                checkEmail = false
            }
        })

        if(checkEmail){
            
            userArray.push(newUser)

            const li = document.createElement("li")

            li.appendChild(
                document.createTextNode(
                    `${nameInput.value} : ${emailInput.value}`
                )
            )

            userList.appendChild(li)
            nameInput.value = ""
            emailInput.value = ""
        }else{
            msg.classList.add("error")
            msg.innerHTML = "EMAIL ALREADY IN USE"

            setTimeout(function() { 
                msg.classList.remove("error")
                msg.innerHTML = "" 
            }, 5000);
        }


        // 1 გზა ----------------------------------------------
        // let checkEmail = true

        // for (let i = 0; i < emailArray.length; i++) {
        //     if(emailArray[i] === emailInput.value){
        //         checkEmail = false
        //     }
        // }            
        // if(checkEmail){

        //     emailArray.push(emailInput.value)

        //     const li = document.createElement("li")

        //     li.appendChild(
        //         document.createTextNode(
        //             `${nameInput.value} : ${emailInput.value}`
        //         )
        //     )

        //     userList.appendChild(li)
        //     nameInput.value = ""
        //     emailInput.value = ""
        // }else{
        //     msg.classList.add("error")
        //     msg.innerHTML = "EMAIL ALREADY IN USE"

        //     setTimeout(function() { 
        //         msg.classList.remove("error")
        //         msg.innerHTML = "" 
        //     }, 5000);
        // }

    }
}