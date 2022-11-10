
moveBehaviorToCards();



function moveBehaviorToCards() {
    const cards = document.querySelectorAll('.cardContainer');
    let degreeOfRotation = 0;
    

    
    for (let card of cards) {
        card.addEventListener('mousedown', (e) => {
            card.addEventListener('mousemove', onDrag);
        });
        
        function onDrag({movementX, movementY}) {
            let getStyle = window.getComputedStyle(card);
            let left = parseInt(getStyle.left);
            let top = parseInt(getStyle.top);
            card.style.left = `${left + movementX}px`;
            card.style.top = `${top + movementY}px`;
        }
        
        document.addEventListener('mouseup', () => {
            card.removeEventListener('mousemove', onDrag);
        })
        
        card.addEventListener('wheel', e => {
            const increment = 5;
            if (e.deltaY > 0) {
                degreeOfRotation += increment;
            } else {
                degreeOfRotation -= increment;
            }
            card.style.transform = `rotate(${degreeOfRotation}deg)`;
        });
    }
    
    
    
}
















//create a function that will rotate the card when I use the mouse wheel



