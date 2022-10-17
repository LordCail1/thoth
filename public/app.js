const generateCardsBtn = document.querySelector("[data-generate-cards]");
const mainContainer = document.querySelector("[data-main-container]");





generateCardsBtn.addEventListener("click", (e) => {
    layOutCard().catch(error => console.log("ERROR"));
});


async function layOutCard() {
    //getting card
    const cardResponse = await fetch("http://localhost:5000/getAllCards", {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    });
    const card = await cardResponse.json();
    
    //getting image
    const imageResponse = await fetch(`http://localhost:5000/image?imageName=${card.imageName}`);
    const image = await imageResponse;
    
    addNewCard(card);
    addNewImage(image);
    console.log(image);
    
    
    
    
    
    
    
}








function addNewCard(card) {
    console.log(card);
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
    console.log(newImg);
    mainContainer.lastChild.appendChild(newImg);

}









