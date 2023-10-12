let x = 10;

function foo(){
    let y = 20;

    function bar(){
        let z = 15;
        let out = x+y+z;
        return out;
    }

    return bar;
}

let outp = foo();

console.log(outp());