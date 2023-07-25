const path = require('path')
const chalk = require('chalk')

// =========== Local Vars =========== //
console.log(__dirname)
console.log(__filename)

// =========== Base File Name =========== //
console.log(path.basename(__filename))

// =========== Directory Name =========== //
console.log(path.dirname(__filename))

// =========== File Extension =========== //
console.log(path.extname(__filename))

// =========== Create Path Object =========== //
console.log(path.parse(__filename))

// =========== Concatenate Paths =========== //
console.log(path.join(path.dirname(__filename), "images"))