import { FormBuilder } from 'angular2/common';
import { TaskRunnerForm } from './taskRunnerForm';

let taskRunnerForm: TaskRunnerForm = null;

export function main(): void {
  'use strict';

  describe('TaskRunnerForm', () => {

    beforeEach(() => {
      taskRunnerForm = new TaskRunnerForm(new FormBuilder());
    });

    it('initialises', () => {
      expect(taskRunnerForm).not.toBeNull();
    });

    // it('passes new clicker through to service', () => {
    //   let clickerName: string = 'dave';
    //   spyOn(Utils, 'resetControl').and.callThrough();
    //   clickerForm['clickerNameInput']['updateValue'](clickerName, true);
    //   clickerForm.newClicker({clickerNameInput: clickerName});
    //   expect(clickerForm.newClicker).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
    //   expect(mockClickers.newClicker).toHaveBeenCalledWith(clickerName);
    //   expect(Utils.resetControl).toHaveBeenCalledWith(clickerForm['clickerNameInput']);
    // });

    // it('doesn\'t try to add a clicker with no name', () => {
    //   let rtn: boolean = clickerForm.newClicker('dave');
    //   expect(rtn).toBe(false);
    //   expect(clickerForm.newClicker).toHaveBeenCalled();
    //   expect(mockClickers.newClicker).not.toHaveBeenCalled();
    // });
  });
}
