import {
trigger,
transition,
style,
query,
group,
animateChild,
animate,
keyframes,
} from '@angular/animations';

const optional = { optional: true };
export const fader = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                }),
            ], optional),
            query(':enter', [
                animate('600ms ease', 
                style({ opacity: 1, transform: 'scale(1) translateY(0)' })
                ),
            ], optional),
        ]),
    ]);

    export const slider = 
    trigger('routeAnimations', [
        transition('* => isLeft', slideToleft('left') ),
        transition('isLeft => *', slideToleft('left') ),
    ]);

    function slideToleft(direction: any) {
        return [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    [direction]: 0,
                    width: '100%',
                }),
            ], optional),
            query(':entry', [
                style({ [direction]: '-100%'}),
            ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ [direction]: '100%' }))
                ], optional),
            ]),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' }))
            ], optional),
        ];
    }