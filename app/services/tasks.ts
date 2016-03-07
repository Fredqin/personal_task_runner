'use strict';

import { Task } from '../models/task';
import { Injectable } from 'angular2/core';
import { SqlStorage } from 'ionic-framework/ionic';

@Injectable()
export class Tasks {
    private tasks: Array<Task>;
    private ids: Array<string>; // we need to keep a separate reference to ids so we can lookup when the app loads from scratch
    private storage: SqlStorage;

    constructor() {
        this.storage = Tasks.initStorage(); // typeof SqlStorage is not assignable to type StorageEngine seems to be an ionic issue
        this.ids = [];
        this.tasks = [];
    }

    private static initStorage(): SqlStorage {
        return new SqlStorage();
    }
}
