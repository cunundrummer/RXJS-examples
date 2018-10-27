import { Observable } from 'rxjs';

console.log('Begin demonstrating Observable...');
/**
 * @description OBSERVABLE
 * By default is UNICAST.
 * Is a DATA PRODUCER.
 *
 */
const observable = Observable.create((observer) => {
  observer.next(Math.random());
});

// subscription 1
observable.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
}).unsubscribe();

// subscription 2
observable.subscribe((data) => {
  console.log(data); // 0.004617340049055896 (random number)
}).unsubscribe();
console.log('Done demonstrating Observable!');

/**
 * @description Creating observables:
 *             Creating observables is easy, just call the new Observable() and pass along one argument which represents
 *             the observer. Therefore it is usually called “observer” as well.
 *
 *             Subscribing to observables:
 *             Remember, observables are lazy. If you don’t subscribe nothing is going to happen. It’s good to know that when you subscribe
 *             to an observer, each call of subscribe() will trigger it’s own independent execution for that given observer. Subscribe
 *             calls are not shared among multiple subscribers to the same observable.
 *
 *             Executing observables:
 *             The code inside an observables represents the execution of the observables. On the parameter that was given when creating
 *             the observable there are three functions available to send data to the subscribers of the observable:
 *
 *             “next”: sends any value such as Numbers, Arrays or objects to it’s subscribers.
 *             “error”: sends a Javascript error or exception
 *             “complete”: does not send any value.
 *
 *             Calls of the next are the most common as they actually deliver the data to it’s subscribers. During observable execution
 *             there can be an infinite calls to the observer.next(), however when observer.error() or observer.complete() is called,
 *             the execution stops and no more data will be delivered to the subscribers.
 */
