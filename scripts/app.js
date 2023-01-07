const copyright = document.querySelector('#copyright');
const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${new Date().getFullYear()}`;

//`Current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`;

let quantity = document.querySelector('#q').value;