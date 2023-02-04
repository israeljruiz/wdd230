// Create three variables that hold references to the input, button, and list elements using const.

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function. Example:  button.addEventListener('click', function() { ...
// In the function block for adding a chapter, make sure the input is not blank before doing the following remaining tasks in this list

button.addEventListener('click', () => {
    const book = input.value;

// create an li element
    const listItem = document.createElement('li');

// create a delete button
    const delBtn = document.createElement('button')

// populate the li elements textContent or innerHTML with the input
    const listText = document.createElement('span')

// populate the button textContent with an ❌
    delBtn.textContent = '❌';

// append the li element with the delete button
    listItem.appendChild(delBtn)

// append the list element with the li element just created and appended with text and the delete button
    listItem.appendChild(listText);
    listText.textContent = book;
    list.appendChild(listItem);

// add an event listener to the delete button that removes the li element when clicked
    delBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

// send the focus to the input element
    input.focus();

// change the input value to nothing or the empty string to clean up the interface for the user
    input.value = '';

})

