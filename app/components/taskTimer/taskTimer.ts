'use strict';

import { Component, View, Input } from 'angular2/core';
import { Tasks } from '../../services/tasks';
import { Task } from '../../models/task';
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
    @Input() task:Task;
    
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
                        this.formatInputTimeData(data);
                        var taskId = this.task.getId();
                        this.taskService.updateTaskTimer(taskId, data);
                        
                        console.log('Saved clicked');
                    }
                }
            ]
        });

        // create prompt to input hour, minute and seconds
        this.nav.present(prompt);
    }

    formatInputTimeData(timeData: Object) {
        var hours: string = timeData["hours"];
        var minutes: string = timeData["minutes"];
        var seconds: string = timeData["seconds"];

        timeData["hours"] = this.formatStringToInt(hours);
        timeData["minutes"] = this.formatStringToInt(minutes);
        timeData["seconds"] = this.formatStringToInt(seconds);
    }

    formatStringToInt(str: string): number {
        var intVal: number;

        if (str.length !== 0) {
            intVal = parseInt(str);
        } else {
            intVal = 0;
        }
        
        return intVal;
    }
}
