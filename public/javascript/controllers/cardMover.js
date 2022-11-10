let selectedCard;

document.addEventListener('mousedown', e => {
    if (e.target.classList.contains('cardContainer')) {
        selectedCard = e.target;
        selectedCard.classList.add('selected-card');


        selectedCard.addEventListener('mouseup', ev => {
            selectedCard.classList.remove('selected-card');
        });
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
        console.log('arrow went up');
        selectedCard.style.zIndex = `${selectedCard.style.zIndex + 1}`;
    }
    if (e.key === 'ArrowDown') {
        console.log('arrow went down');
        selectedCard.style.zIndex = `${selectedCard.style.zIndex - 1}`;
    }
});


// document.addEventListener('mousedown', e => {
//     if (e.target.classList.contains('cardContainer')) {
//         e.target.style.zIndex = '1';
//         e.target.addEventListener('mouseup', ev => {
//             ev.target.style.zIndex = '0';
//         });
//     }
// });


function moveBehaviorToCards() {
    const arrayOfCards = document.querySelectorAll('.cardContainer');
    const lastCardDropped = document.querySelectorAll('.cardContainer')[arrayOfCards.length - 1];
    
    
    
    let degreeOfRotation = 0;
    lastCardDropped.addEventListener('mousedown', (e) => {
        lastCardDropped.addEventListener('mousemove', onDrag);
    });
    
    function onDrag({movementX, movementY}) {
        let getStyle = window.getComputedStyle(lastCardDropped);
        let left = parseInt(getStyle.left);
        let top = parseInt(getStyle.top);
        lastCardDropped.style.left = `${left + movementX}px`;
        lastCardDropped.style.top = `${top + movementY}px`;
    }
    
    document.addEventListener('mouseup', () => {
        lastCardDropped.removeEventListener('mousemove', onDrag);
    })
    
    lastCardDropped.addEventListener('wheel', e => {
        const increment = 5;
        if (e.deltaY > 0) {
            degreeOfRotation += increment;
        } else {
            degreeOfRotation -= increment;
        }
        lastCardDropped.style.transform = `rotate(${degreeOfRotation}deg)`;
    });
}
















//create a function that will rotate the card when I use the mouse wheel



