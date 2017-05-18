var foo = 1;

function bar() {
// scoped foo = undefined przeslania 1
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);  // 10
}

// Hoisting sprawi że foo zostanie zadeklarowane wewnątrz funkcji bar (mimo ifow) i foo = undefinded przesłoni zewnętrzne foo.
