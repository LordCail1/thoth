

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