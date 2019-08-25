import './scss/styles.scss';
import * as helpers from './helpers/helpers';
import { startInterval, cleanupInterval } from './examples/interval';
import { dummySubscriptionFunction } from './examples/dummy';

export interface Observer {
  next: Function;
  error?: Function;
  complete?: Function;
}

export class Observable {
  constructor(private subscriptionFn: Function) {
    this.subscriptionFn = subscriptionFn;
  }
  subscribe(observer: Observer) {
    return this.subscriptionFn(observer);
  }
}

/**
 * @description examples
 */

document.querySelector('.interval').addEventListener('click', () => {
  if (document.body.classList.contains('subscribed')) {
    cleanupInterval();
  } else {
    startInterval();
  }
});

const dummy$ = new Observable(dummySubscriptionFunction);
dummy$.subscribe({
  next(s: string) {
    console.log(s);
  },
  complete() {
    console.log('done');
  },
  error(err: any) {
    console.log(err);
  }
});
