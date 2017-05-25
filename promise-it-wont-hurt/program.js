require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    fulfill("PROMISE VALUE");
    reject(new Error("I DID NOT FIRE"));
});

function onReject(error) {
    console.log(error.message);
}

promise.then(console.log, onReject);
console.log("MAIN PROGRAM")

/*setTimeout(function(){
    console.log("TIMED OUT!");
}, 300);*/
