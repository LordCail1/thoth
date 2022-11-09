const generateCardsBtn = document.querySelector("[data-generate-cards]");
const pulledCards = [];






generateCardsBtn.addEventListener("click", (e) => {
    if (pulledCards.length === 20) return;
    fetchingCard().catch(error => console.log("ERROR"));
    
});




async function fetchingCard() {
    try {
        const cardResponse = await fetch("http://localhost:5000/cards/card", { 
        method: "GET",
        headers: {
            "Content-Type":"application/json" 
        }});
        const card = await cardResponse.json();
        if (!card) return;
        pulledCards.push(card);
        console.log(card);
    } catch (err) {
        console.log(err.message);
    }
}





