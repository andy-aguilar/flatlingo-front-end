document.addEventListener("DOMContentLoaded", ()=> {
    // Handling Login and Links
    const url = 'http://localhost:3000/users/1';
    const createButton =  document.querySelector('.button.create');

    function fetchUser(){
        fetch(url)
            .then(response => response.json())
            .then(user => user.decks.forEach(deck => { renderDeck(deck) }));

    }

    function renderDeck(deck){
        const divDeckContainer = document.getElementById('deck-container')
        let divDeck = document.createElement('div');
        divDeck.classList += 'button';
        divDeck.innerText = deck.name;
        divDeckContainer.append(divDeck);



    }

    function deckCreation(){
        // const bottomContainer = document.getElementById('bottom-container');

        // let form = document.createElement('FORM');
        // bottomContainer.append(form);

        // let nameInput = document.createElement('INPUT');
        // nameInput.setAttribute("type", "text");
        // form.append(nameInput);

        // let submitCreate = document.createElement('input');
        // submitCreate.setAttribute("type", "submit");
        // form.append(submitCreate);
        // form.innerHTML =
        // `<input id="deckName" placeholder= "name...">
        // <input id=type="submit" value="Submit">`
        

        let deckValue = document.querySelector('#deckName').innerText

        

    }

    createButton.addEventListener('click', (e)=>{
        deckCreation();
      
    });
    
        // const options = {
        //     method: "PATCH",
        //     headers: {
        //         "content-type": "application/json",
        //         "accept": "application/json",
        //     },
        //     body: JSON.stringify({name, breed, sex})           

        // }


        // fetch(url, options)
        //     .then(response => response.json())
        //     .then(user => user.decks.forEach(deck => { renderDeck(deck) }));

    

    




    fetchUser();
    // Handling card flipping
    const cardFronts = document.querySelectorAll(".flip-card-front");
    const cardBacks = document.querySelectorAll(".flip-card-back");
    

    cardFronts.forEach(FlipFunction)
    cardBacks.forEach(BackFlipFunction)

    // CREATE DECK MODAL ISH
    const createDeckButton = document.getElementById("create-deck-button");
    const createDeckModal = document.getElementById("create-deck-modal");
    const closeSpan = document.getElementsByClassName("close")[0];

    createDeckButton.addEventListener("click", (e)=>{
        createDeckModal.style.display = "block";
    })

    closeSpan.addEventListener("click", (e)=>{
        createDeckModal.style.display = "none";
    })
    document.addEventListener("click", (e)=>{
        if(e.target == createDeckModal){
            createDeckModal.style.display = "none";
        }
    })
})


// CardFlipFunctions
const FlipFunction = (cardFront) => {
    cardFront.addEventListener("click", (e) => {
        //e.target.parentElement.style.transform = "rotateY(180deg)";
        e.target.closest(".flip-card-inner").style.transform = "rotateY(180deg)";
    })
}
const BackFlipFunction = (cardBack) => {
    cardBack.addEventListener("click", (e) => {
        e.target.closest(".flip-card-inner").style.transform = "";
        
    })
}