const cards = document.querySelector('.cards')
const searchBar = document.querySelector('.form-control')

searchBar.addEventListener("keyup", (searchValue) => {
    cards.innerHTML = ''

    fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((characters) => {

        characters.forEach((character) => {

            if(character.name.toLowerCase().includes(searchValue.target.value.toLowerCase())){
                
                cards.innerHTML += `
                    <div class='card'>
                        <div class='card-inner'>
                            <div class='card-front'>
                                <img src="${character.img}" alt='' />
                            </div>

                            <div class='card-back'>

                                <h1>${character.name}</h1>
                                
                                <ul>
                                    <li>
                                        <strong>Actor Name:</strong> ${character.portrayed}
                                    </li>
                                    <li>
                                        <strong>Nickname:</strong> ${character.nickname}
                                    </li>
                                    <li>
                                        <strong>Birthday:</strong> ${character.birthday}
                                    </li>
                                    <li>
                                        <strong>Status:</strong> ${character.status}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                `
                
            }

        })
    }) 
})
