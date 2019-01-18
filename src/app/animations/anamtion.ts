import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes,
  animation,
  useAnimation
} from '@angular/animations';

export const bounceLeftOutAnimation = animation(
  animate(
    '0.5s ease-in', // '0.5s 1s cubic - bezier(.16, .78, .49, 1.1)'
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translateX(-10px)'
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)'
      })
    ])
  )
);

export const bounceLeftOut = trigger('bounceLeftOut', [
  transition(':enter', [
    animate(2000),
    style({ transform: 'translateX(-10px)' })
  ]),
  transition(':leave', useAnimation(bounceLeftOutAnimation))
]);

export let slide = trigger('slide', [
  // state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate(2000),
    style({ transform: 'translateX(-10px)' })
  ]),
  transition(':leave', [
    animate(
      '0.5s ease-in', // '0.5s 1s cubic - bezier(.16, .78, .49, 1.1)'
      style({
        backgroundColor: 'white',
        transform: 'translateX(-100%)'
      })
    )
  ])
]);

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [animate(2000)]),
  transition(':leave', [animate(1000)])
]);
