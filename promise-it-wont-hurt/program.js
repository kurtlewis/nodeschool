require('es6-promise');

/*var promise = new Promise(function (fulfill, reject) {
    console.log("Printing things yo")
});*/

function parsePromised() {
    return new Promise(function(fulfill, reject) {
        try {
            JSON.parse(process.argv[2]);
            fulfill("YAY!");
        } catch(e) {
            reject(e);
        }
    });
}

var promise = parsePromised();

promise.then(console.log, console.log);

/*function onReject(error) {
    console.log(error.message);
}*/

//promise.catch(function() { console.log(error.message)})
