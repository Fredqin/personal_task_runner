'use strict';

import { Component, View } from 'angular2/core';
import { AbstractControl, ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { Button, Icon, Item, Label, TextInput } from 'ionic-framework/ionic';

@Component({
  selector: 'task-runner-form',
})

@View({
  templateUrl: 'build/components/taskRunnerForm/taskRunnerForm.html',
  directives: [Button, Icon, Item, Label, TextInput],
})

export class TaskRunnerForm {

  private form: ControlGroup;
  private taskrNameInput: AbstractControl;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      clickerNameInput: ['', Validators.required],
    });

    this.taskrNameInput = this.form.controls['clickerNameInput'];
  }

  public newClicker(formValue: Object): boolean {

    // need to mark the clickerName control as touched so validation
    // will apply after the user has tried to add a clicker
    // this.clickerNameInput.markAsTouched();

    // if (!this.clickerNameInput.valid) {
    //   return false;
    // }

    // this.clickerService.newClicker(formValue['clickerNameInput']);

    // // reset the value of the contorl and all validation / state
    // this.clickerNameInput = Utils.resetControl(this.clickerNameInput);

    return true;
  }
}
