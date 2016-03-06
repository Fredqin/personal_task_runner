'use strict';

import {Page, NavController} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/pages/task-runner-list/task-runner-list.html',
})

export class TaskRunnerList {
    private nav: NavController;
    private title: string;
    constructor(nav: NavController) {
        this.nav = nav;
        this.title = 'Task Runner';
    }
}
