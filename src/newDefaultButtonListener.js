const newDefaultButtonListener = () => {
  const newDefaultButton = document.querySelector('.newDefault'); 

  newDefaultButton.addEventListener('click', () => {
    console.log('a');
  });
};

export { newDefaultButtonListener };