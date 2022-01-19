const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

function setClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}`;

    const yyyy = now.getFullYear();
    const mm = String(now.getMonth()+1).padStart(2,'0');
    const dd = String(now.getDate()).padStart(2,'0');
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    date.innerText = `✨ ${yyyy}. ${mm}. ${dd} ${days[now.getDay()]}`;
}

setClock();
setInterval(setClock,1000);