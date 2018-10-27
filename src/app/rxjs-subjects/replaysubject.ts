/**
 *  @description ReplaySubject
 *               Similar to the BehaviourSubject but retains last n values and can 'replay' them to new subscribers.
 *
 *               Can also hold values for set amount of time: ex. store the last 5 values, that have been executed in the last
 *               'second' prior to new execution.
 *
 *  @link https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0
 *
 */
import {ReplaySubject} from 'rxjs';

console.log('Begin demonstrating ReplaySubject example1...');

const subject = new ReplaySubject(2);

// subscriber 1
subject.subscribe((data) => {
  console.log('Subscriber A:', data);
});

subject.next(Math.random());
subject.next(Math.random());
subject.next(Math.random());

// subscriber 2
subject.subscribe((data) => {
  console.log('Subscriber B:', data);
});

subject.next(Math.random());

// Subscriber A: 0.3541746356538569
// Subscriber A: 0.12137498878080955
// Subscriber A: 0.531935186034298
// Subscriber B: 0.12137498878080955
// Subscriber B: 0.531935186034298
// Subscriber A: 0.6664809293975393
// Subscriber B: 0.6664809293975393

console.log('Done demonstrating BehaviourSubject example1!');


console.log('Begin demonstrating ReplaySubject example2...');


/**
 *  "I want to store the last 5 values, that have been executed in the last second prior to a new subscription”
 */

const subject2 = new ReplaySubject(2, 100);

// subscriber 1
subject2.subscribe((data) => {
  console.log('Subscriber A:', data);
});

setInterval(() => subject2.next(Math.random()), 200);

// subscriber 2
setTimeout(() => {
  subject2.subscribe((data) => {
    console.log('Subscriber B:', data);
  });
}, 1000);

// Subscriber A: 0.44524184251927656
// Subscriber A: 0.5802631630066313
// Subscriber A: 0.9792165506699135
// Subscriber A: 0.3239616040117268
// Subscriber A: 0.6845077617520203
// Subscriber B: 0.6845077617520203
// Subscriber A: 0.41269171141525707
// Subscriber B: 0.41269171141525707
// Subscriber A: 0.8211466186035139
// Subscriber B: 0.8211466186035139
console.log('Done demonstrating BehaviourSubject example2!');

/**
 * @description for example2:
 * create the ReplaySubject and specify that we only want to store the last 2 values, but no longer than a 100 ms.
 *
 * We start subscribing with Subscriber A.
 *
 * We start emitting Subject values every 200 ms. Subscriber A will pick this up and log every value that’s being
 * emitted by the Subject.
 *
 * We start subscribing with Subscriber B, but we do that after 1000 ms. This means that 5 values have already been
 * emitted by the Subject before we start subscribing. When we created the Subject we specified that we wanted to store
 * max 2 values, but no longer then 100ms. This means that after a 1000 ms, when Subscriber B starts subscribing, it
 * will only receive 1 value as the subject emits values every 200ms.
 */

