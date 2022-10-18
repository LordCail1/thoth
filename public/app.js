const generateCardsBtn = document.querySelector("[data-generate-cards]");
const mainContainer = document.querySelector("[data-main-container]");
const pulledCards = [];
let firstTimePull = true;





generateCardsBtn.addEventListener("click", (e) => {
    layOutCard().catch(error => console.log("ERROR"));
});


async function layOutCard() 
{
    //getting card
    const cardResponse = await fetch("http://localhost:5000/getAllCards", {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    });
        const card = await cardResponse.json();
    
    
    let hasBeenPulled = true;
    // do {
    //     hasBeenPulled = verifyIfCardWasPulled(card, pulledCards);
        
    // } while(hasBeenPulled)
    
   
    
    pulledCards.push(card);
    
    //getting image
    const imageResponse = await fetch(`http://localhost:5000/image?imageName=${card.imageName}`);
    const image = await imageResponse;
    
    //adding cards to UI
    addNewCard(card);
    addNewImage(image);
}

function addNewCard(card) {
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

function addNewImage(image) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.src = image.url;
    mainContainer.lastChild.appendChild(newImg);
}









