const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const ingredientsListRef = document.querySelector('#ingredients');

const addIngredients = (products) => {
  
  const newIngredients = products.map(product => {

    const newItem = document.createElement("li");

    newItem.classList.add("ingredients-item");

    newItem.textContent = product;
  
    return newItem;

  })

  ingredientsListRef.append(...newIngredients);

};

addIngredients(ingredients);



