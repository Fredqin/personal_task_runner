'use strict';

export class Common {

    public convertSSToHHMMSS(sec: number): string {
        if (sec === 0) {
            return 'No Time Set';
        }

        let hours: number = Math.floor(sec / 3600) % 24;
        let minutes: number = Math.floor(sec / 60) % 60;
        let seconds: number = sec % 60;

        let result: string = '';

        if (hours !== 0) {
            result += (hours === 1 ? hours + ' hour' : hours + ' hours');
            result += ' ';
        }

        if (minutes !== 0) {
            result += (minutes === 1 ? minutes + ' minute' : minutes + ' minutes');
            result += ' ';
        }

        if (seconds !== 0) {
            result += (seconds < 10 ? seconds + ' second' : seconds + ' seconds');
        }

        // trim the result after done
        result = result.trim();

        return result;
    }

}
