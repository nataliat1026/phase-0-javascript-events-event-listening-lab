function clickAlert() {
    alert('I was clicked!');
}

function addingEventListener() {
    const input = document.querySelector('#input');
    input.addEventListener('click', clickAlert);
}

