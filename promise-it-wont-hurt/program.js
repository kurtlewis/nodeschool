require('es6-promise');

/*var promise = new Promise(function (fulfill, reject) {
    console.log("Printing things yo")
});*/

function attachTitle(arg1) {
    return "DR. " + arg1;
}

var promise = new Promise(function(fulfill, reject) {
    fulfill("MANHATTAN");
})

promise.then(attachTitle).then(console.log);

/*function onReject(error) {
    console.log(error.message);
}*/

//promise.catch(function() { console.log(error.message)})
