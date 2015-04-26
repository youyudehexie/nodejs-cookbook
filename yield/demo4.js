var Iterator = function (data) {
    this.curr = 0;
    this.data = data;
}

Iterator.prototype.hasNext = function () {
    return (this.data.length - 1) > curr;
}

Iterator.prototype.next = function () {
    var ret;
    if (!this.hasNext) {
        return;
    }

    ret = this.data[this.curr];
    this.curr += 1;
    return ret;
}


var arrs = [1,2,3,4,5];
var iterator = new Iterator(arrs);

for (var i = 0; i < arrs.length + 1; i++) {
    //1
    //2
    //3
    //4
    //5
    //undefined
    console.log(iterator.next());
}
