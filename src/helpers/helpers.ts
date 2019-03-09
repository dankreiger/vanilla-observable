const body: HTMLElement = document.body;
const puppy: HTMLElement = document.querySelector('.puppy');
const btn: HTMLElement = document.querySelector('.btn');

const puppyAnimation = () => {
  puppy.animate({
    opacity: [0.7, 1],
    transform: ['scale(0.7)', 'scale(1)'],
  }, {
      direction: 'alternate',
      duration: 200,
    });
}

export const puppyStartStyles = () => {
  body.classList.add('subscribed');
  btn.classList.add('btn-danger');
  btn.innerText = 'Unsubscribe';
  puppy.innerText = 'Wauwau!'
}

export const puppyCleanupStyles = () => {
  body.classList.remove('subscribed');
  puppy.innerHTML = 'Unsubscribed 🐶'
  btn.innerText = 'Subscribe';
  btn.classList.remove('btn-danger');
}

export const printPuppyCount = (v: number) => {
  puppy.innerText = `${v + 1}`;
  puppyAnimation();
}






































