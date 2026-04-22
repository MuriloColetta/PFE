document.querySelectorAll('.foto.carrossel').forEach(carrossel => {
  const container = carrossel.querySelector('.carrossel-container');
  const imgs = container.querySelectorAll('img');
  const btnPrev = carrossel.querySelector('.carrossel-btn.prev');
  const btnNext = carrossel.querySelector('.carrossel-btn.next');

  let index = 0;

  function update() {
    container.style.transform = `translateX(${-index * 100}%)`;
  }

  btnPrev.addEventListener('click', () => {
    index = (index - 1 + imgs.length) % imgs.length;
    update();
  });

  btnNext.addEventListener('click', () => {
    index = (index + 1) % imgs.length;
    update();
  });

  update();
});