import { Tasks } from './tasks';
import { Task } from '../models/task';

const TASKS_ID: Array<string> = ['yy5d8klsj0', 'q20iexxg4a', 'wao2xajl8a'];
let tasks: Tasks = null;

function storageGetStub(key: string): Promise<string> {
    'use strict';

    let rtn: string = null;

    switch (key) {
        case 'ids':
            rtn = JSON.stringify(TASKS_ID);
            break;
        case TASKS_ID[0]:
            rtn = '{"id":"' + TASKS_ID[0] + '","name":"test1","timer": 300 }';
            break;
        case TASKS_ID[1]:
            rtn = '{"id":"' + TASKS_ID[1] + '","name":"test2","timer": 300 }';
            break;
        case TASKS_ID[2]:
            rtn = '{"id":"' + TASKS_ID[2] + '", "name":"test3", "timer": 300 } ';
            break;
        default:
            rtn = 'SHOULD NOT BE HERE!';
    }

    return new Promise((resolve: Function) => {
        resolve(rtn);
    });
}

function storageSetStub(key: string, value: string): Promise<{}> {
    'use strict';

    return new Promise((resolve: Function) => {
        resolve(true);
    });
}

function storageRemoveStub(key: string): Promise<{}> {
    'use strict';

    return new Promise((resolve: Function) => {
    resolve(true);
  });
}

let mockSqlStorage: Object = {
    get: storageGetStub,
    set: storageSetStub,
    remove: storageRemoveStub,
};

export function main(): void {
    'use strict';

    describe('Tasks', () => {

        beforeEach(() => {
            spyOn(Tasks, 'initStorage').and.returnValue(mockSqlStorage);
            tasks = new Tasks();
            spyOn(tasks['storage'], 'set');
        });

        it('initialises with empty tasks', () => {
            expect(tasks.getTasks()).toEqual([]);
        });

        it('creates an instance of SqlStorage', () => {
            expect((<any>Tasks).initStorage()).toEqual(mockSqlStorage);
        });

        it('has empty ids with no storage', (done: Function) => {
            (<any>tasks).initIds()
                .then(() => {
                    expect(tasks.getTasks()).toEqual([]);
                    done();
                });
        });

        it('loads IDs from storage', (done: Function) => {
            (<any>tasks).initIds()
                .then((ids: Array<string>) => {
                    expect(ids).toEqual(TASKS_ID);
                    done();
                });
        });

        it('loads tasks from storage', (done: Function) => {
            (<any>tasks).initTasks(TASKS_ID)
                .then((resolvedTasks: Array<Task>) => {
                    expect(resolvedTasks.length).toEqual(3);
                    expect(resolvedTasks[0].getId()).toEqual(TASKS_ID[0]);
                    expect(resolvedTasks[1].getId()).toEqual(TASKS_ID[1]);
                    expect(resolvedTasks[2].getId()).toEqual(TASKS_ID[2]);
                    done();
                });
        });

        it('has empty tasks with no storage', (done: Function) => {
            (<any>tasks).initTasks([])
                .then(() => {
                    expect(tasks.getTasks()).toEqual([]);
                    done();
                });
        });

        it('can initialise a task from string', () => {
            let taskString: string = '{"id":"0g2vt8qtlm","name":"harold","timer":300 }';
            let task: Task = (<any>tasks).initTask(taskString);
            expect(task.getName()).toEqual('harold');
            expect(task.getTimer()).toEqual(300);
        });

        it('should add new task with the correct name', () => {
            let idAdded: string = tasks.newTask('test');
            expect(tasks['storage'].set).toHaveBeenCalledWith(idAdded, jasmine.any(String));
            expect(tasks.getTasks()[0].getName()).toEqual('test');
        });

        it('returns undefined for a bad id', () => {
            expect(tasks.getTask('no_existed')).not.toBeDefined();
        });

        it('should remove task if id provided', () => {
            let idToRemove: string = tasks.newTask('newTask');
            tasks.removeTask(idToRemove);
            expect(tasks['storage'].set).toHaveBeenCalledWith(idToRemove, jasmine.any(String));
            expect(tasks.getTasks()).toEqual([]);
        });

    });
};
