const my_maths = require('./maths');

const cp = require('child_process');
//cp.execSync('open ~/Desktop');

const os = require('os');
// console.log(os.machine())
// console.log(os.type())
// console.log(os.version())
// console.log(os.platform())
// console.log(os.cpus())

const figlet = require('figlet')

figlet("Sweety", function (err, data) {
    if (err) {
        console.log(err)
        return
    } else {
        console.log(data)
    }
}
)

function sum() {
    let a = 4;
    let b = 5;
    let c = a + b;
    console.log("Sum of the number");
    console.log(c);
}

sum();
let a = my_maths.addition(3, 5)
let b = my_maths.subtraction(3, 4)
console.log('a = ' + a)
console.log('b = ' + b)

//console.log(global);

// const count = 5;
// console.log('count: %d', count);
// // Prints: count: 5, to stdout
// console.log('count:', count);
// // Prints: count: 5, to stdout
