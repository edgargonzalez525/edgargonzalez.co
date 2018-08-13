// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({
        height: 0,
        opacity: 0,
        transform: 'translateY(50px)'
      }),

      // animation and styles at end of transition
      animate('500ms 500ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        height: '*',
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ]),

    // route 'leave' transition
    transition(':leave', [

      // css styles at start of transition
      style({
        opacity: 1,
        transform: 'translateY(0)'
      }),

      // animation and styles at end of transition
      animate('500ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        opacity: 0,
        transform: 'translateY(50px)'
      }))
    ]),
  ]);


export const fadeInAnimationSimple =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimationSimple', [
    state('in', style({
      height: '*',
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('void => *', [
      style({
        height: 0,
        opacity: 0,
        transform: 'translateY(-50px)'
      }),
      animate('600ms cubic-bezier(0.165, 0.84, 0.44, 1)')
    ]),
    transition('* => void', [
      animate('600ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        height: 0,
        opacity: 0,
        transform: 'translateY(-50px)'
      }))
    ])
  ]);

export const slideAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideAnimation', [
    state('in', style({ height: '*' })),
    transition('void => *', [
      style({ height: 0 }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({ height: 0 }))
    ])
  ]);

export const scaleAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('scaleAnimation', [
    state('in', style({ transform: 'scale(1)' })),
    transition('void => *', [
      style({ transform: 'scale(0)' }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({ transform: 'scale(0)' }))
    ])
  ]);

export const simpleFadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('simpleFadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({
        height: 0,
        opacity: 0,
        transform: 'translateY(10px)'
      }),

      // animation and styles at end of transition
      animate('200ms 200ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        height: '*',
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ]),

    // route 'leave' transition
    transition(':leave', [

      // css styles at start of transition
      style({
        opacity: 1,
        transform: 'translateY(0)'
      }),

      // animation and styles at end of transition
      animate('200ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        opacity: 0,
        transform: 'translateY(-10px)'
      }))
    ]),
  ]);


export const slide =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slide', [
    state('in', style({
      height: '*',
      opacity: 1
    })),
    transition('void => *', [
      style({
        height: 0,
        opacity: 0
      }),
      animate('300ms cubic-bezier(0.165, 0.84, 0.44, 1)')
    ]),
    transition('* => void', [
      animate('300ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        height: 0,
        opacity: 0
      }))
    ])
  ]);
