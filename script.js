let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    const filter = button.getAttribute('data-filter');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    cards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || filter === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});


let count = list.length
let active =0

next.onclick = () =>{
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0: active +1
    list[active].classList.add('active')
}

prev.onclick = () =>{
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    
    active = active <= 0 ? count -1: active -1
    list[active].classList.add('active')
}