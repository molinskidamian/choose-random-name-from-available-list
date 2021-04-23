const form = document.querySelector('form');
const btnAddName = form.querySelector('button[name="addName"]');
const input = form.querySelector('input[name="name"]');
const showAvailableList = document.querySelector('.names-list-wrapper');
const namesArr = [];

const addNameToList = (e) => {
  e.preventDefault();
  const inputValue = input.value;

  namesArr.push(inputValue);
  console.log(namesArr);


};

btnAddName.addEventListener('click', addNameToList);
