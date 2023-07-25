const section = document.querySelector("section"),
                hireBtn = section.querySelector("#hireBtn"),
                closeBtn = section.querySelectorAll("#close"),
                textArea = section.querySelector("textarea"),
                cancelBtn = document.querySelectorAll("#close");

hireBtn.addEventListener("click" , () =>{
    section.classList.add("show");
});

closeBtn.forEach(cBtn => {
    cBtn.addEventListener("click" , ()=>{
        section.classList.remove("show");
        textArea.value = "";
    });
});

hireBtn.addEventListener("click", ()=>{
    section.classList.add("active");
})

cancelBtn.forEach(cBtn => {
    cBtn.addEventListener("click", () =>{
        section.classList.remove("active");
    })
});