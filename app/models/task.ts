'use strict';

// Represents a single task
export class Task {

    private id: string;
    private name: string;
    private seconds: number;

    constructor(id: string, name: string, seconds: number) {
        this.id = id;
        this.name = name;
        this.seconds = seconds;
    }

    public getName(): string {
        return this.name;
    }

    public getSeconds(): number {
        return this.seconds;
    }

}
