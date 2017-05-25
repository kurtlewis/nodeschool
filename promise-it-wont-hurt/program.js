require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        var error = new Error("REJECTED!");
        reject(error);
    }, 300);
});

function onReject(error) {
    console.log(error.message);
}

promise.then(console.log, onReject);

/*setTimeout(function(){
    console.log("TIMED OUT!");
}, 300);*/
