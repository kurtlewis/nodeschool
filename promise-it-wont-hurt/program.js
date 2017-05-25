require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    console.log("Printing things yo")
});

promise = Promise.reject(new Error("UH OH"));

/*function onReject(error) {
    console.log(error.message);
}*/

promise.catch(function() { console.log(error.message)})

//promise.then(console.log, onReject);
console.log("MAIN PROGRAM")

/*setTimeout(function(){
    console.log("TIMED OUT!");
}, 300);*/
