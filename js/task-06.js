const inputRef = document.querySelector('#validation-input');

function validation() {
  if (Number(inputRef.getAttribute('data-length')) === inputRef.value.length) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}

inputRef.addEventListener('blur', validation);
