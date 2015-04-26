function co(GenFunc) {
    return function (cb) {
        var gen = GenFunc();
        next();

        function next() {
            if (gen.next) {
                var ret = gen.next();

                if (ret.done) {
                    cb && cb();
                } else {
                    ret.value(next);
                }
            }
        }
    }
}

function delay(time) {
    return function (cb) {
        setTimeout(function () {
            cb();
        }, time)
    }
}

console.time('1');
co(function* () {
    yield delay(200);
    yield delay(1000);
    yield delay(200);

})(function () {
    console.timeEnd('1');
});
