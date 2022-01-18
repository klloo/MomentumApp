const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

function setClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}`;

    const years = now.getFullYear();
    const months = String(now.getMonth()+1).padStart(2,'0');
    const days = String(now.getDate()).padStart(2,'0');
    date.innerText = `${years}. ${months}. ${days}`;
}

setClock();
setInterval(setClock,1000);