import { TaskRunnerList } from './task-runner-list';

let taskRunnerList: TaskRunnerList = null;

export function main(): void {
  'use strict';

  describe('TaskRunnerList', () => {

    beforeEach(() => {
      taskRunnerList = new TaskRunnerList(null);
    });

    it('initialises', () => {
      expect(taskRunnerList).not.toBeNull();
    });
  });
}
