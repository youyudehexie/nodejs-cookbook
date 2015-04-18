var fs = require('fs');

async = {
    map: function (arrs, iter, callback) {
        var length = arrs.length;
        var count = 0;
        var result = [];

        var next = function (err, data) {
            if (err) {
                return callback(err);
            }

            result.push(data);
            count += 1;

            if (count === length) {
                return callback(err, result);
            }
        };

        arrs.forEach(function (arr) {
            iter.call(null, arr, next);
        })
    }

};

async.map(['1.txt', '2.txt', '3.txt'], function (filename, next) {
    fs.readFile(filename, 'utf-8', next);
}, function (err, result) {
    console.log(result);
    console.log('fin');
});

