/**
 * @description AsyncSubject
 *              Only the last value of the observable execution is sent to its subscribers, AND only when the
 *              execution completes.
 */
import {AsyncSubject} from 'rxjs';

console.log('Begin demonstrating AsyncSubject...');
const subject = new AsyncSubject();

// subscriber 1
subject.subscribe((data) => {
  console.log('Subscriber A:', data);
});

subject.next(Math.random()); // #.####...
subject.next(Math.random()); // #.####...
subject.next(Math.random()); // #.####...

// subscriber 2
subject.subscribe((data) => {
  console.log('Subscriber B:', data);
});

subject.next(Math.random()); // 0.4447275989704571
subject.complete();

// Subscriber A: 0.4447275989704571
// Subscriber B: 0.4447275989704571
