window.addEventListener('load', () => {

  const slider = [...document.querySelectorAll('.testimony__body')];
  const buttonBefore = document.getElementById('before');
  const buttonNext = document.getElementById('next');

  let value;

  buttonBefore.addEventListener('click', () => {
    changePosition(-1);
  });

  buttonNext.addEventListener('click', () => {
    changePosition(1);
  });

  function changePosition(newPosition) {
    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
    value = parseInt(currentTestimony);
    value += newPosition;

    slider[Number(currentTestimony)-1].classList.remove('testimony__body--show');

    if(value === slider.length + 1 || value === 0) {
      value = value === 0 ? slider.length : 1;
    }

    slider[value-1].classList.add('testimony__body--show');
  }
});