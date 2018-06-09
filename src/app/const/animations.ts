import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const ANIMATE_IN_OUT = [
  trigger('animateInOut', [
    state('*', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate('0.5s 0.4s ease-out', keyframes([
        style({transform: 'translateX(-100%)', offset: 0}),
        style({transform: 'translateX(0px)', offset: 1})
      ]))
    ]),
    transition('* => void', [
      animate('0.5s 0.4s ease-in', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(100%)', offset: 1.0})
      ]))
    ])
  ])
];

export const ANIMATE_FAB_CHANGE = [
  trigger('animateFabChange', [
    state('hide', style({
      opacity: '0'
    })),
    state('show',   style({
      opacity: '1'
    })),
    transition('show => hide', animate('200ms ease-in')),
    transition('hide => show', animate('500ms ease-in'))
  ])
];

export const ANIMATE_BACKBTN = [
  trigger('animateBackbtn', [
    state('hide', style({
      opacity: '0',
      transform: 'scale(0)'
    })),
    state('show',   style({
      opacity: '1',
      transform: 'scale(1)'
    })),
    transition('hide => show', animate('500ms 100ms ease-out'))
  ])
];
