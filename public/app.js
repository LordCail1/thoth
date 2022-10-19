
const generateCardsBtn = document.querySelector("[data-generate-cards]");
const mainContainer = document.querySelector("[data-main-container]");
const pulledCards = [];





generateCardsBtn.addEventListener("click", (e) => {
    fetchingCard().catch(error => console.log("ERROR"));
});






async function fetchingCard() {
    if (pulledCards.length === 38) {
        return;
    }
    //getting card
    const cardResponse = await fetch("http://localhost:5000/getCard", { 
    method: "GET",
    headers: {
        "Content-Type":"application/json" 
    }});
    
    card = await cardResponse.json();
    console.log(card);
    pulledCards.push(card);
    addNewCardToPage(card);
    addNewImageToPage(card.imageName);
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

function addNewImageToPage(imageName) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.src = `/images/${imageName}.jpg`;
    console.log(newImg);
    mainContainer.lastChild.appendChild(newImg);
}









