import Observer from "../observer.interface";

export const dummySubscriptionFunction = (observer: Observer) => {
  observer.next("dummy data");
  try {
    observer.complete();
  } catch (err) {
    observer.error(err);
  }
};
