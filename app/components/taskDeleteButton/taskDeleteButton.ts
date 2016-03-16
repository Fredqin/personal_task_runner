'use strict';

import { Component, View } from 'angular2/core';
import { Tasks } from '../../services/tasks';
import { Button, Icon } from 'ionic-framework/ionic';

@Component({
    selector: 'task-delete-button',
    inputs: ['task: task'],
})

@View({
    templateUrl: 'build/components/taskDeleteButton/taskDeleteButton.html',
    directives: [Button, Icon],
})

export class TaskDeleteButton {

    private taskService: Tasks;

    constructor(taskService: Tasks) {
        this.taskService = taskService;
    }

    public removeTask(id: string): void {
        this.taskService.removeTask(id);
    }
}
