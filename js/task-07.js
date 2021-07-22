const rangeRef = document.getElementById('font-size-control');

const textRef = document.querySelector('#text');

const total = rangeRef.addEventListener('input', () => {
  textRef.style.fontSize = `${rangeRef.value}px`;
});
