'use strict';

// Represents a single timer
export class Timer {

    private hour: number;
    private minute: number;
    private second: number;

    constructor(hour?: number, minute?: number, second?: number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    public getHour(): number {
        return this.hour;
    }

    public getMinute(): number {
        return this.minute;
    }

    public getSecond(): number {
        return this.second;
    }

    public setHour(hour: number): void {
        this.hour = hour;
    }

    public setMinute(minute: number): void {
        if (minute > 59) {
            this.minute = 59;
        } else {
            this.minute = minute;
        }
    }

    public setSecond(second: number): void {
        if (second > 59) {
            this.second = 59;
        } else {
            this.second = second;
        }
    }
}
