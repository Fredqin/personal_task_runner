'use strict';

import { Task } from './task';

export function main(): void {
    'use strict';

    describe('Task', () => {

        it('initialises with the correct name and seconds', () => {
            let task: Task = new Task('12434', 'test task', 300);
            expect(task.getName()).toEqual('test task');
            expect(task.getSeconds()).toEqual(300);
        });
    });

}
