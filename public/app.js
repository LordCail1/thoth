const generateCardsBtn = document.querySelector("[data-generate-cards]");
const mainContainer = document.querySelector("[data-main-container]");





generateCardsBtn.addEventListener("click", (e) => {
    
    fetch("http://localhost:5000/getAllCards", {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(res => {
        return res.json();
    })
    .then(data => addNewCard(data))
    .catch(error => console.log("ERROR"));

});

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

















