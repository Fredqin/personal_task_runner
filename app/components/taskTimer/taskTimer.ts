'use strict';

import { Component, View, Input } from 'angular2/core';
import { Tasks } from '../../services/tasks';
import { Task } from '../../models/task';
import { Button, Icon } from 'ionic-framework/ionic';
import { Common } from '../../services/common';

@Component({
    selector: 'task-timer',
    // inputs: ['task: task'],
    // providers: [ Common ]
})

@View({
    templateUrl: 'build/components/taskTimer/taskTimer.html',
    directives: [Button, Icon],
})

export class TaskTimer {
    @Input() task: Task;

    private taskService: Tasks;
    private timeDisplay: string;
    
    constructor(taskService: Tasks) {
        this.taskService = taskService;
    }

    // ask init
    ngOnInit() {
        this.timeDisplay = Common.convertSSToHHMMSS(this.task.getTimer());
        console.log(this.timeDisplay);
    }
}
