import * as helpers from '../helpers/helpers';
import Observable from '../observable';
import Observer from '../observer.interface';

const interval = (milliseconds = 0) => {
  return new Observable((observer: Observer) => {
    let count = 0;

    const id = setInterval(() => {
      observer.next(count++);
    }, milliseconds);

    return {
      unsubscribe() {
        clearInterval(id);
      },
    };
  });
};

let subscription: any;
export const startInterval = (): void => {
  helpers.puppyStartStyles();

  subscription = interval(1000).subscribe({
    next(v: number) {
      helpers.printPuppyCount(v);
    },
  });
};

export const cleanupInterval = () => {
  helpers.puppyCleanupStyles();
  subscription.unsubscribe();
};
