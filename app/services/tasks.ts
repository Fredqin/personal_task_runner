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
        this.initIds()
            .then((ids: Array<string>) => { this.ids = ids; })
            .then(() => this.initTasks(this.ids))
            .then((taskList: Array<Task>) => { this.tasks = taskList; });
    }

    // initialise Ids from SQL storage
    private initIds(): Promise<{}> {
        return new Promise((resolve: Function) => {
            let ids: Array<string> = [];
            this.storage.get('ids') // return the promise so we can chain initClickers
                .then((rawIds: string) => {
                    // ids are stored as stringified JSON array
                    ids = JSON.parse(rawIds) || [];
                })
                .then(() => resolve(ids));
        });
    }

    // initialise Tasks from SQL storage given an array of ids
    private initTasks(ids: Array<string>): Promise<{}> {
        // get all existing ids
        return new Promise((resolve: Function) => {
            let tasks: Array<Task> = [];
            for (let id of ids) {
                this.storage.get(id)
                    .then((task: string) => {
                        tasks.push(this.initTask(task));
                    });
            }
            resolve(tasks);
        });
    }

    // initialise a task from a raw JSON string out of the DB
    private initTask(task: string): Task {
        const parsedClicker: Object = JSON.parse(task);
        const newTask: Task = new Task(parsedClicker['id'], parsedClicker['name'], parsedClicker['timer']);

        // add the task - need to re-instantiate object
        // for (let click of parsedClicker['clicks']) {
        //     newClicker.addClick(new Click(click.time, click.location));
        // }

        return newTask;
    }

    private static initStorage(): SqlStorage {
        return new SqlStorage();
    }

    private uid(): string {
        return Math.random().toString(35).substr(2, 10);
    }

    public newTask(name: string): string {
        const id: string = this.uid();
        // by default time is set to 300
        const task: Task = new Task(id, name, 300);
        // add the task to the service
        this.tasks.push(task);
        // add the id to the service (need to keep a separate reference of IDs so we can cold load clickers)
        this.ids.push(id);
        // save the clicker by id
        this.storage.set(id, JSON.stringify(task));
        // save the service's ids array
        this.storage.set('ids', JSON.stringify(this.ids));

        return id;
    }

    public getTasks(): Array<Task> {
        return this.tasks;
    }

    public removeTask(id: string): void {
        // remove clicker from the service
        this.tasks = this.tasks.filter((clicker: Task) => { return clicker.getId() !== id; });

        // remove from ids array
        this.ids = this.ids.filter((filterId: string) => { return filterId !== id; });

        // null id in db
        this.storage.remove(id);

        // update service's ids array
        this.storage.set('ids', JSON.stringify(this.ids));
    }

    public getTask(id: string): Task {
        return this.tasks.find((task: Task) => { return task.getId() === id; });
    }
}
