'use strict';

// Represents a single task
export class Task {

    private id: string;
    private name: string;
    private timer: number;

    constructor(id: string, name: string, timer: number) {
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

    public getTimer(): number {
        return this.timer;
    }

}
