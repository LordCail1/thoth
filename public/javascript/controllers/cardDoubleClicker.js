
document.addEventListener('dblclick', (e) => {
    openLinkInNewTab(e)
    
    
    
});


function openLinkInNewTab(ev) {
    if (ev.target.classList.contains('cardContainer')) {
        const url = ev.target.getAttribute ('data-link-text');
        window.open(url, '_blank');
    }
}

document.addEventListener('click', e => {
    console.log(e);
});
