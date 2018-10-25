import { Observable, BehaviorSubject } from 'rxjs';

/**
 * @description BehaviourSubject
 *  The BehaviorSubject has the characteristic that it stores the “current” value. This means that you can always directly
 *  get the last emitted value from the BehaviorSubject.
 *
 *  There are two ways to get this last emitted value. You can either get the value by accessing the .value property on the BehaviorSubject
 *  or you can subscribe to it. If you subscribe to it, the BehaviorSubject will directly emit the current value to the subscriber.
 *  Even if the subscriber subscribes much later than the value was stored.
 */

console.log('Begin demonstrating BehaviourSubject...');

const subject: BehaviorSubject<any> = new BehaviorSubject(null);

// subscriber 1
subject.subscribe((data) => {
  console.log('Subscriber A:', data);
});

subject.next(Math.random());
subject.next(Math.random());

// subscriber 2
subject.subscribe((data) => {
  console.log('Subscriber B:', data);
});

subject.next(Math.random());

console.log(subject.value);

// output
// Subscriber A: null   <-- initialization
// Subscriber A: 0.24957144215097515
// Subscriber A: 0.8751123892486292
// Subscriber B: 0.8751123892486292
// Subscriber A: 0.1901322109907977
// Subscriber B: 0.1901322109907977
// 0.1901322109907977

console.log('Done demonstrating BehaviourSubject!');

