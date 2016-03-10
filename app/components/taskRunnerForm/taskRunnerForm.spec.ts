import { FormBuilder } from 'angular2/common';
import { TaskRunnerForm } from './taskRunnerForm';
import { Tasks }    from '../../services/tasks';
import { Utils }       from '../../services/utils';

let taskRunnerForm: TaskRunnerForm = null;
let mockTasks: Tasks = Object.create(Tasks);

mockTasks.newTask = function(): string { return 'test task'; };

export function main(): void {
    'use strict';

    describe('TaskRunnerForm', () => {
        beforeEach(() => {
            taskRunnerForm = new TaskRunnerForm(mockTasks, new FormBuilder());
            spyOn(taskRunnerForm, 'newTask').and.callThrough();
            spyOn(mockTasks, 'newTask').and.callThrough();
        });

        it('initialises', () => {
            expect(taskRunnerForm).not.toBeNull();
        });

        // it('the task should have task name and time after submit', () => {

        // });

        it('doesn\'t try to add a task with no name', () => {
            let rtn: boolean = taskRunnerForm.newTask('test');
            expect(rtn).toBe(false);
            expect(taskRunnerForm.newTask).toHaveBeenCalled();
            expect(mockTasks.newTask).not.toHaveBeenCalled();
        });

        it('passes new task through to service', () => {
          let taskName: string = 'test';
          spyOn(Utils, 'resetControl').and.callThrough();
          taskRunnerForm['taskNameInput']['updateValue'](taskName, true);
          taskRunnerForm.newTask({taskNameInput: taskName});
          expect(taskRunnerForm.newTask).toHaveBeenCalledWith(Object({ taskNameInput: taskName }));
          expect(mockTasks.newTask).toHaveBeenCalledWith(taskName);
          expect(Utils.resetControl).toHaveBeenCalledWith(taskRunnerForm['taskNameInput']);
        });

        // it('default time set to 15 minutes', () => {

        // });

        // it('passes new task through to service', () => {

        // });  
    });
}
