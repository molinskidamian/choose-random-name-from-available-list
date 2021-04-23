let alertWrapperFlag = true;

function showAlert(text) {
  const alertWrapper = document.querySelector('.alert-wrapper');
  if (alertWrapperFlag) {
    alertWrapper.style.display = 'flex';
    const p = alertWrapper.querySelector('p');
    const content = document.createTextNode(text);
    p.appendChild(content);
    alertWrapperFlag = false;
  } else {
    alertWrapper.style.display = 'none';
    alertWrapperFlag = true;
  }
}

// Add names

(function () {
  const form = document.querySelector('form');
  const btnAddName = form.querySelector('button[name="addName"]');
  const btnReset = document.querySelector('.btn-reset');
  const input = form.querySelector('input[name="name"]');
  const showAvailableList = document.querySelector('.names-list-wrapper');
  const winner = document.querySelector('.winner');
  const paragraph = showAvailableList.querySelector('p');
  const btnRandomName = document.querySelector('.btn-random-name');
  const namesArr = [];

  const addNameToList = (e) => {
    e.preventDefault();
    const inputValue = input.value;

    if (namesArr.indexOf(inputValue) === -1) {
      if (inputValue === '') {
        showAlert('Musisz wpisać imię');
      } else {
        namesArr.push(inputValue);
      }
    } else if (inputValue === '') {
      console.log('Nie podałeś imienia');
    } else {
      console.log('Takie imię już istnieje');
    }

    const content = document.createTextNode(namesArr.join(', '));
    paragraph.textContent = '';
    paragraph.appendChild(content);
    input.value = '';
    if (namesArr.length > 0) {
      btnRandomName.style.display = 'block';
      btnReset.style.display = 'block';
    }

    function randomFn() {
      return Math.floor(Math.random() * (namesArr.length - 1 + 1));
    }

    function chooseRandomName() {
      const chooseName = namesArr[randomFn()];
      winner.textContent = chooseName;
    }

    btnReset.addEventListener('click', (event) => {
      event.preventDefault();
      const namesList = document.querySelector('.names-list');

      namesArr.length = 0;
      namesList.textContent = '';
      btnRandomName.style.display = 'none';
      winner.textContent = '';
    });

    btnRandomName.addEventListener('click', chooseRandomName);
  };

  btnAddName.addEventListener('click', addNameToList);
}());
