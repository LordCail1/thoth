

const generateCardsBtn = document.querySelector("[data-generate-cards]");
const mainContainer = document.querySelector("[data-main-container]");
const pulledCards = [];
let firstTimePull = true;





generateCardsBtn.addEventListener("click", (e) => {
    fetchingCard().catch(error => console.log("ERROR"));
    
    
    
});






async function fetchingCard() {
    hasAlreadyBeenPulled = false;
    let card;
    let image;
    
    do {

        //getting card
        const cardResponse = await fetch("http://localhost:5000/getAllCards", { 
        method: "GET",
        headers: {
            "Content-Type":"application/json" 
        }});
        
        card = await cardResponse.json();
        
        //getting image
        const imageResponse = await fetch(`http://localhost:5000/image?imageName=${card.imageName}`);
        image = await imageResponse;
        
        //if second car or more, verifying if it has already been pulled
        if (firstTimePull === false) {
            hasAlreadyBeenPulled = verifyIfCardWasPulled(card);
        }
        
        
    } while(hasAlreadyBeenPulled)
    firstTimePull = false;
    pulledCards.push(card);
    addNewCardToPage(card)
    addNewImageToPage(image);
}








function addNewCardToPage(card) {
    const newDiv = document.createElement("div");
    for (let property in card) {
        if (property === "link") {
            const a = document.createElement("a");
            a.textContent = card.name;
            a.classList.add("card-link");
            a.setAttribute("href", `${card.link}`);
            a.setAttribute("target", "_blank");
            newDiv.appendChild(a);
            break;
        }
        const p = document.createElement("p");
        p.textContent = `${property}: ${card[property]}`;
        p.classList.add("card-info");
        newDiv.appendChild(p);
    }
    newDiv.classList.add("card-container");
    mainContainer.appendChild(newDiv);
}

function addNewImageToPage(image) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.src = image.url;
    mainContainer.lastChild.appendChild(newImg);
}









