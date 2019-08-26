import "./scss/styles.scss";
import ExampleHelper from "./helpers/ExampleHelper";
import Observer from "./observer.interface";

export default class Observable {
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
