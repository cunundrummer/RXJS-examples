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
