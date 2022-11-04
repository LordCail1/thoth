

document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains("card-container")) {
        const card = e.target;
        card.addEventListener('mousemove', (e) => {
            console.log('YO');


        });



    };
});

