'use strict';

import { Task } from './task';
import { Timer } from './timer';

export function main(): void {
    'use strict';

    describe('Task', () => {

        it('initialises with the correct id, name and timer', () => {
            let timer: Timer = new Timer(1, 2, 30);
            let task: Task = new Task('12434', 'test task', timer);
            expect(task.getId()).toEqual('12434');
            expect(task.getName()).toEqual('test task');

            expect(task.getTimer().getHour()).toEqual(1);
            expect(task.getTimer().getMinute()).toEqual(2);
            expect(task.getTimer().getSecond()).toEqual(30);
        });
    });

}
