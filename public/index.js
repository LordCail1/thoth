const generateCardsBtn = document.querySelector("[data-generate-cards]");






generateCardsBtn.addEventListener("click", (e) => {
    fetchingCard().catch(error => console.log("ERROR"));
    
});




async function fetchingCard() {
    const cardResponse = await fetch("http://localhost:5000/getCard", { 
    method: "GET",
    headers: {
        "Content-Type":"application/json" 
    }});
    
}





