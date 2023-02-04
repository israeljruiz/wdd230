
// Specify what everything will go under
const list = document.querySelector('ul');

// Specify input that will go in
const input = document.querySelector('input');

// Add item button used in addEventListener
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';
  console.log(input.value)

//   Creates list item
  const listItem = document.createElement('li');
  console.log('listItem: ',listItem)

// Adds text
  const listText = document.createElement('span');
console.log('listText',listText)

// Add delete button
  const listBtn = document.createElement('button');
console.log('Button', listBtn)



  listItem.appendChild(listText);
  listText.textContent = myItem;
  console.log(myItem)
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});