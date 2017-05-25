require('es6-promise');

/*var promise = new Promise(function (fulfill, reject) {
    console.log("Printing things yo")
});*/



first().then(function(value) {
    second(value).then(console.log);}
)


/*function onReject(error) {
    console.log(error.message);
}*/

//promise.catch(function() { console.log(error.message)})
