function* Hello () {
    yield 1;
    yield 2;
}

var hello = Hello();

var a = hello.next();
var b = hello.next();
var c = hello.next();

console.log(a, b, c);
