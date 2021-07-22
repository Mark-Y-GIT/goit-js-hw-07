
const refs = {
    buttonClickPlusRef: document.querySelector('#counter  button[data-action="increment"]'),
    
    buttonClickMinusRef: document.querySelector('#counter  button[data-action="decrement"]'),

    totalCounterValue: document.querySelector('#value'),
}

let counterValue = 0;


const increment = function () {
    refs.totalCounterValue.textContent = counterValue += 1;

}
 

const decrement = function () {

refs.totalCounterValue.textContent = counterValue -= 1;
  
 }


 
refs.buttonClickPlusRef.addEventListener('click', increment)

refs.buttonClickMinusRef.addEventListener('click', decrement)
