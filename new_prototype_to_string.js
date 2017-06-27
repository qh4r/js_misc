let proto = {toString: function() {return "SECRET" }}

function create() { return {a: 23, b: 43, f: "dasdsad"} }
function create2() { this.a = 23; this.b = 43; this.f = "dasdsad"; }

create.prototype = proto
create2.prototype = proto

let c1 = new create;
let c2 = new create2;

console.log(`create: ${c1} create2: ${c2}`) // "create: [object Object] create2: SECRET"

// Template string automatycznie robi toString,
// jesli w new zrobimy return czego innego niz this to prototyp sie nie przypisze
