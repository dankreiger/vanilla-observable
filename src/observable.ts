import './scss/styles.scss';
import * as helpers from './helpers/helpers';
import { startInterval, cleanupInterval } from './examples/interval';
import { dummySubscriptionFunction } from './examples/dummy';
import ExampleHelper from './helpers/ExampleHelper';

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
 * @description run examples
 */

const e = new ExampleHelper();
e.init();
