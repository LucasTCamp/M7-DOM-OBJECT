const myDiv = document.getElementById('myDiv');
let counter = 0;

let header = document.createElement('h1');
header.innerHTML = 'Welcome to DOM homework';
header.setAttribute('class', 'highlight');
myDiv.appendChild(header);

let paragraph = document.createElement('p');
paragraph.innerHTML = 'This is your first DOM homework assignment';
myDiv.appendChild(paragraph);

let list = document.createElement('ul');

let li1 = document.createElement('li');
li1.innerHTML = 'Drake';

let li2 = document.createElement('li');
li2.innerHTML = 'TheWeekend';

let li3 = document.createElement('li');
li3.innerHTML = 'Carti';

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
myDiv.appendChild(list);

let button = document.createElement('button');
button.innerHTML = 'Add new list item';
myDiv.appendChild(button);

button.addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.innerHTML = 'New List Item ' + counter++;
    newItem.style.color = '#' + Math.floor(Math.random() * 15848365).toString(16);
    list.appendChild(newItem);
});

myDiv.addEventListener('click', function () {
    myDiv.style.backgroundColor = '#' + Math.floor(Math.random() * 15848365).toString(16);
});





















//FWAEH 