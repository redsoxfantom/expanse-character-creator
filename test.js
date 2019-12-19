var test = require("./public/javascripts/bundle.js").testlib.default

console.log("Beginning test")
var result = test()
console.log("Test complete. Passed:",result)

if(result) {
    process.exit(0)
} else {
    process.exit(1)
}