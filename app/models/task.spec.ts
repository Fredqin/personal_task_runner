'use strict';

import { Task } from './task';

export function main(): void {
    'use strict';

    describe('Task', () => {

        it('initialises with the correct id, name and timer', () => {
            let task: Task = new Task('12434', 'test task', 300);
            expect(task.getId()).toEqual('12434');
            expect(task.getName()).toEqual('test task');
            expect(task.getTimer()).toEqual(300);
        });
    });

}
