'use strict';

import { Timer } from './timer';

// Represents a single task
export class Task {

    private id: string;
    private name: string;
    private timer: Timer;

    constructor(id: string, name: string, timer: Timer) {
        this.id = id;
        this.name = name;
        this.timer = timer;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getTimer(): Timer {
        return this.timer;
    }

    public setTimer(timer: Timer): void {
        this.timer = timer;
    }

}
