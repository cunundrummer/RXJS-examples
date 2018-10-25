import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

/**
 * @description SUBJECT
 * Main reason to use is to multicast.
 * Can be used as a data producer AND a data consumer.
 * When calling subscribe on a Subject it does not invoke a new    * execution that delivers data. It simply registers the given
 * Observer in a list of Observers.
 */

console.log('Begin demonstrating Subject...');
const subject = new Subject();

// subscriber 1
subject.pipe(take(1)).subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

// subscriber 2
subject.pipe().subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

subject.next(Math.random());
console.log('Done demonstrating Subject example1!');

/**
 * Whereas Observables are solely data producers, Subjects can both be used as a data producer and a data consumer.
 * By using Subjects as a data consumer you can use them to convert Observables from unicast to multicast.
 * Here’s a demonstration of that:
 */
console.log('Begin demonstrating Subject example2... ');
const observable = Observable.create((observer) => {
  observer.next(Math.random());
});

const subjectEx2 = new Subject();

// subscriber 1
subjectEx2.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

// subscriber 2
subjectEx2.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

observable.subscribe(subjectEx2);
console.log('Done demonstrating Subject example2!');
