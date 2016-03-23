'use strict';

import { Component, View } from 'angular2/core';
import { Tasks } from '../../services/tasks';
import { Button, Icon } from 'ionic-framework/ionic';

@Component({
    selector: 'task-timer',
    inputs: ['task: task'],
    // providers: [ Common ]
})

@View({
    templateUrl: 'build/components/taskTimer/taskTimer.html',
    directives: [Button, Icon],
})

export class TaskTimer {
    private taskService: Tasks;

    constructor(taskService: Tasks) {
        this.taskService = taskService;
    }
}
