const datefield = document.querySelector('#date');
const now = new Date();
const fullDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format();
datefield.textContent = fullDate;

const catchLastModification = new Date(document.lastModified);
const yearMonthDay = catchLastModification.toLocaleString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'});
const hourMinutesSeconds = catchLastModification.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
const dateTime = `Last updated: ${yearMonthDay} ${hourMinutesSeconds} `;
document.getElementById('updated').innerHTML = dateTime

document.getElementById('year').innerHTML = `&copy; ${new Date().getFullYear()}`;

function toggleHamb () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const close = document.getElementById('hamburgerBtn');
close.onclick = toggleHamb;

const d = new Date();
let weekday = d.getDay();
var message

switch (weekday) {
    case 1:
        message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
        break;
    case 0:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        message = "Welcome to the Inqa Chamber of Commerce!";
}

document.querySelector('.meet').innerHTML = message