/* console.log("One");

// даже если задержка 0 то код выполнится последним после всего основного кода
setTimeout(function() {
    console.log("Two");
}, 0);


console.log("Three");
console.log("Four"); */

const foo = function() {
    console.log("начинаю foo");
    setTimeout(function() {
        console.log("foo");
    }, 1000);
    console.log("заканчиваю foo");
}
const bar = function() {
    console.log("начинаю bar");
    setTimeout(function() {
        console.log("bar");
    }, 6000);
    console.log("метод bar после setTimeout, перед вызовом foo. Вызываю метод foo()");
    foo();
    console.log("заканчиваю bar");
}
const baz = function() {
    console.log("начинаю baz");
    setTimeout(function() {
        console.log("baz");
    }, 1000);
    console.log("метод baz после setTimeout, перед вызовом bar. Вызываю метод bar()");
    bar();
    console.log("заканчиваю baz");
}

baz();