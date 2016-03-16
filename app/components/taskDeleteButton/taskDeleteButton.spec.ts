import { Tasks } from '../../services/tasks';
import { TaskDeleteButton } from './taskDeleteButton';

let taskDeleteButton: TaskDeleteButton = null;
let mockTasks: Tasks = Object.create(Tasks);

mockTasks.removeTask = function(id: string): boolean { return true; };

export function main(): void {
    'use strict';

    describe('TaskRunnerForm', () => {
        beforeEach(() => {
            taskDeleteButton = new TaskDeleteButton(mockTasks);
            spyOn(taskDeleteButton, 'removeTask').and.callThrough();
            spyOn(mockTasks, 'removeTask').and.callThrough();
        });

        it('initialises', () => {
            expect(taskDeleteButton).not.toBeNull();
        });

        it('should call task service remove task function', () => {
            let taskId: string = 'testid';
            taskDeleteButton.removeTask(taskId);
            expect(taskDeleteButton.removeTask).toHaveBeenCalledWith(String(taskId));
            expect(mockTasks.removeTask).toHaveBeenCalledWith(taskId);
        });
    });

}
