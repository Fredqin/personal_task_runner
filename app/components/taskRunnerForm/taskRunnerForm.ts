'use strict';

import { Component, View } from 'angular2/core';
import { AbstractControl, ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { Button, Icon, Item, Label, TextInput } from 'ionic-framework/ionic';
import { Utils } from '../../services/utils';

@Component({
    selector: 'task-runner-form',
})

@View({
    templateUrl: 'build/components/taskRunnerForm/taskRunnerForm.html',
    directives: [Button, Icon, Item, Label, TextInput],
})

export class TaskRunnerForm {

    private form: ControlGroup;
    private taskNameInput: AbstractControl;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            taskNameInput: ['', Validators.required],
        });

        this.taskNameInput = this.form.controls['taskNameInput'];
    }

    public newTask(formValue: Object): boolean {
        // need to mark the clickerName control as touched so validation
        // will apply after the user has tried to add a clicker
        this.taskNameInput.markAsTouched();

        if (!this.taskNameInput.valid) {
            return false;
        }

        // this.clickerService.newClicker(formValue['clickerNameInput']);

        // reset the value of the contorl and all validation / state
        this.taskNameInput = Utils.resetControl(this.taskNameInput);

        return true;
    }
}
