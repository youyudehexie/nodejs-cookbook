function co(GenFunc) {
    return function (cb) {
        var gen = GenFunc();
        next();

        function next(args) {
            if (gen.next) {
                var ret = gen.next(args);

                if (ret.done) {
                    cb && cb(args);
                } else {
                    ret.value(next);
                }
            }
        }
    }
}

function delay(time) {
    return function (fn) {
        setTimeout(function () {
            fn(time);
        }, time)
    }
}

co(function* () {
    var a;
    a = yield delay(200);
    a = yield delay(a + 100);
    a = yield delay(a + 100);
})(function (data) {
    console.log(data);
});
