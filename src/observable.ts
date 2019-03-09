import './scss/styles.scss'
import * as helpers from './helpers/helpers';

class Observable {
  constructor(private subscriptionFn: Function) {
    this.subscriptionFn = subscriptionFn;
  }
  subscribe(observer: Observer) {
    return this.subscriptionFn(observer);
  }
}

interface Observer {
  next: Function;
  error?: Function;
  complete?: Function;
}

const subscriptionFunction = (observer: Observer) => {
  observer.next('dummy data');
  observer.complete();
}

const dummy$ = new Observable(subscriptionFunction);

const interval = (milliseconds = 0) => {
  return new Observable((observer: Observer) => {
    let count = 0;

    const id = setInterval(() => {
      observer.next(count++);
    }, milliseconds);

    return {
      unsubscribe() {
        clearInterval(id);
      }
    }
  });
}




let subscription: any;
const start = () => {
  helpers.puppyStartStyles();

  subscription = interval(1000).subscribe({
    next(v: number) {
      helpers.printPuppyCount(v);
    }
  });
}

const cleanup = () => {
  helpers.puppyCleanupStyles();
  subscription.unsubscribe();
}

document.querySelector('.btn').addEventListener('click', () => {
  if (document.body.classList.contains('subscribed')) {
    cleanup();
  } else {
    start();
  }
});