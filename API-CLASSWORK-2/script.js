const accordion = document.querySelector('.accordion')
const card = document.querySelector('.card')

fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((albums) => {

        let counter = 1
        albums.forEach((album) => {

            const oneCard = document.createElement('div')
            oneCard.classList.add("card")
            
            oneCard.innerHTML += `
                <div class="card-header" id="heading${counter}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${counter}" aria-expanded="false" aria-controls="collapse${counter}">
                            ${album.title}
                        </button>
                    </h2>
                </div>
            
                <div id="collapse${counter}" class="collapse" aria-labelledby="heading${counter}" data-parent="#accordionExample">
                    <div class="card-body">
                        
                    </div>
                </div>
            `

            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
                .then((response) => response.json())
                .then((photos) => {
                    const cardBody = oneCard.querySelector('.card-body')
                    photos.forEach((photo) => {
                        cardBody.innerHTML += `
                            <img src="${photo.url}"></img>
                        `
                    })
                })

        
            accordion.appendChild(oneCard)
            counter++ 
        })
    })

    // <img src="${photo.title}"></img>