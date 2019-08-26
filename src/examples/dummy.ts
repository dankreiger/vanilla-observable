import Observer from "../observer.interface";
import Observable from "../observable";

export const dummySubscriptionFunction = (observer: Observer) => {
  observer.next("dummy data");
  try {
    observer.complete();
  } catch (err) {
    observer.error(err);
  }
};

export const dummy$ = new Observable(dummySubscriptionFunction);
