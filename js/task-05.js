const inputRef = document.querySelector('#name-input');

const outputRef = document.querySelector('#name-output');

const outputContent = event => {
  if (event.currentTarget.value === '') {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
};

inputRef.addEventListener('input', outputContent);
