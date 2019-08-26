import { cleanupInterval, startInterval } from '../examples/interval';
import { Observable } from '../observable';
import { dummySubscriptionFunction } from '../examples/dummy';

export default class ExampleHelper {
  constructor() {}
  private prepareButtons() {
    document.querySelector('.interval').addEventListener('click', () => {
      if (document.body.classList.contains('subscribed')) {
        cleanupInterval();
      } else {
        startInterval();
      }
    });
  }

  private prepareDummy() {
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
  }
  public init() {
    this.prepareButtons();
    this.prepareDummy();
  }
}
