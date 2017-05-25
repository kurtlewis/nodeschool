require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        fulfill("FULFILLED!")
    }, 300);
});

promise.then(console.log);

/*setTimeout(function(){
    console.log("TIMED OUT!");
}, 300);*/
