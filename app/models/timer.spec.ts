import { Timer } from './timer';

export function main(): void {
    'use strict';

    describe('timer', () => {

        it('override initialises the correct hour, minute and second', () => {
            let timer: Timer = new Timer(1, 20, 30);
            expect(timer.getHour()).toEqual(1);
            expect(timer.getMinute()).toEqual(20);
            expect(timer.getSecond()).toEqual(30);
        });

        it('minute and second should not exceed 59', () => {
            let timer: Timer = new Timer(1, 20, 30);
            timer.setMinute(80);
            timer.setSecond(90);
            expect(timer.getMinute()).toEqual(59);
            expect(timer.getSecond()).toEqual(59);
        });

        it('should define as 5 minutes if constructor does not have parameter', () => {
            let timer: Timer = new Timer();
            expect(timer.getHour()).toEqual(0);
            expect(timer.getMinute()).toEqual(5);
            expect(timer.getSecond()).toEqual(0);
        });
    });

}
