const userContainer = document.querySelector(".userContainer"),
                hireBtn1 = userContainer.querySelector("#hireBtn"),
                closeBtn1 = userContainer.querySelectorAll("#close"),
                textArea1 = userContainer.querySelector("textarea"),
                cancelBtn1 = document.querySelectorAll("#close");

hireBtn1.addEventListener("click" , () =>{
    userContainer.classList.add("show");
});

closeBtn1.forEach(cBtn => {
    cBtn.addEventListener("click" , ()=>{
        userContainer.classList.remove("show");
        textArea1.value = "";
    });
});

hireBtn1.addEventListener("click", ()=>{
    userContainer.classList.add("active");
})

cancelBtn1.forEach(cBtn => {
    cBtn.addEventListener("click", () =>{
        userContainer.classList.remove("active");
    })
});