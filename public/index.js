const generateCardsBtn = document.querySelector("[data-generate-cards]");






generateCardsBtn.addEventListener("click", (e) => {
    fetchingCard().catch(error => console.log("ERROR"));
    
});




async function fetchingCard() {
    const cardResponse = await fetch("http://localhost:5000/cards/allCards", { 
    method: "GET",
    headers: {
        "Content-Type":"application/json" 
    }});
    const cards = await cardResponse.json();
    console.log(cards);
}





