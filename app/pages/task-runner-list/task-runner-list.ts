'use strict';

import {Page, NavController} from 'ionic-framework/ionic';
import {TaskRunnerForm} from '../../components/taskRunnerForm/taskRunnerForm';
import { Tasks } from '../../services/tasks';

@Page({
    templateUrl: 'build/pages/task-runner-list/task-runner-list.html',
    providers: [Tasks],
    directives: [TaskRunnerForm],
})

export class TaskRunnerList {
    private taskService: Tasks;
    private nav: NavController;
    private title: string;
    
    constructor(nav: NavController, taskService: Tasks) {
        this.taskService = taskService;
        this.nav = nav;
        this.title = 'Task Runner';
    }
}
