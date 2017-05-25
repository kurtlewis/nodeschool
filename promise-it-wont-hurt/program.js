require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    fulfill("I FIRED");
    reject(new Error("I DID NOT FIRE"));
});

function onReject(error) {
    console.log(error.message);
}

promise.then(console.log, onReject);

/*setTimeout(function(){
    console.log("TIMED OUT!");
}, 300);*/
