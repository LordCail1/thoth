

const card = document.querySelector('.cardContainer');




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

//create a function that will rotate the card when I use the mouse wheel



let degreeOfRotation = 0;

card.addEventListener('wheel', e => {
    const increment = 5;
    if (e.deltaY > 0) {
        degreeOfRotation += increment;
    } else {
        degreeOfRotation -= increment;
    }
    card.style.transform = `rotate(${degreeOfRotation}deg)`;
});
