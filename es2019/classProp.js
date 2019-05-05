class Counter {
    count = 0;

    inc = () => {
        this.count += Counter.incStep;
        console.log(this.count);
    }

    static incrementStep = 2;

    static incrementAll = function() {
        arr.forEach((c) => c.increment());
    };
}

const cnt = new Counter();
console.log(cnt.count);
cnt.inc();
setTimeout(cnt.inc, 1000);