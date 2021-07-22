const categoriesRef = document.querySelectorAll('.item');

const categoryList = function () {
  console.log(`В списке ${categoriesRef.length} категории.`);
};

const categoryAndQuantity = () => {
  categoriesRef.forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}`);

    console.log(
      `Количество элементов: ${element.querySelector('ul').children.length}`,
    );
  });
};

categoryList();

categoryAndQuantity();
