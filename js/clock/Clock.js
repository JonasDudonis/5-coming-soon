class Clock {
    constructor() {
        // 2021-11-16 10:00
        this.now = Date.now();

        this.deadline = {
            year: 2021,
            month: 11,
            day: 16,
            hour: 10,
            minutes: 0,
            seconds: 0,

        }
    }

    start() {}

    pause() {}

    stop() {}
}

export { Clock }
