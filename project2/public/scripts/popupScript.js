const section = document.querySelector(".about-content"),
                hireBtn = section.querySelector("#hireBtn"),
                popup = section.querySelector(".popup-box"),
                cancelBtn = document.querySelectorAll("#close");

hireBtn.addEventListener("click" , () =>{
    section.classList.add("show");
    // section.classList.add("blur");
});

hireBtn.addEventListener("click", ()=>{
    section.classList.add("active");
    // section.classList.add("blur");
})

cancelBtn.forEach(cBtn => {
    cBtn.addEventListener("click", () =>{
        section.classList.remove("show");
        section.classList.remove("active");
        section.classList.remove("blur");
    })
});