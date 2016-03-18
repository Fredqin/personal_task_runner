import { Common } from './common';

export function main(): void {
    'use strict';

    describe('Common', () => {
        it('convertSSToHHMMSS function should convert the correct format', () => {
            // regular case
            expect(Common.convertSSToHHMMSS(300)).toBe('5 minutes');
            expect(Common.convertSSToHHMMSS(6000)).toBe('1 hour 40 minutes');
        });

        it('convertSSToHHMMSS function should accept 0', () => {
            let zeroSecondResult: string = Common.convertSSToHHMMSS(0);
            expect(zeroSecondResult).toBe('No Time Set');
        });
    });
}
