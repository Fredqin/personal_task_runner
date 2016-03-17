import { Common } from './common';

let common: Common = null;

export function main(): void {
    'use strict';

    describe('Common', () => {

        beforeEach(() => {
            common = new Common();
        });

        it('convertSSToHHMMSS function should convert the correct format', () => {
            // regular case
            expect(common.convertSSToHHMMSS(300)).toBe('5 minutes');
            expect(common.convertSSToHHMMSS(6000)).toBe('1 hour 40 minutes');
        });

        it('convertSSToHHMMSS function should accept 0', () => {
            let zeroSecondResult: string = common.convertSSToHHMMSS(0);
            expect(zeroSecondResult).toBe('No Time Set');
        });
    });
}
