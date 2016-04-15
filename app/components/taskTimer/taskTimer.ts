'use strict';

import { Component, View } from 'angular2/core';
import { Tasks } from '../../services/tasks';
import { Button, Icon, TextInput, Alert, NavController} from 'ionic-framework/ionic';

@Component({
    selector: 'task-timer',
    inputs: ['task: task'],
})

@View({
    templateUrl: 'build/components/taskTimer/taskTimer.html',
    directives: [Button, Icon, TextInput],
})

export class TaskTimer {
    private taskService: Tasks;

    constructor(taskService: Tasks, public nav: NavController) {
        this.taskService = taskService;
    }

    openTimerSetDialog() {
        let prompt = Alert.create({
            title: 'Set timer',
            message: "Enter hours, minutes and seconds",
            inputs: [
                {
                    name: 'hours',
                    placeholder: 'hours',
                    type: "number",
                }, 
                {
                    name: 'minutes',
                    placeholder: 'minutes',
                    type: "number",
                },
                {
                    name: 'seconds',
                    placeholder: 'seconds',
                    type: "number",
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log(data)
                        console.log('Saved clicked');
                    }
                }
            ]
        });

        // create prompt to input hour, minute and seconds
        this.nav.present(prompt);

        // input should be limited to 2 digits
        console.log(prompt)

    }
}
