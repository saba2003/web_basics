const os = require('os')
const chalk = require('chalk')

// =========== Platform =========== //
console.log(
    chalk.bold.red(os.platform())
)

// =========== CPU Arch =========== //
console.log(
    chalk.bold.bgBlueBright(os.arch())
)

// =========== CPU Core Info =========== //
console.log(
    chalk.bold.green(os.cpus())
)

// =========== Free Memory =========== //
console.log(
    chalk.bold.grey(os.freemem())
)

// =========== Total Memory =========== //
console.log(
    chalk.bold.blue(os.totalmem())
)

// =========== Home Dir =========== //
console.log(
    chalk.bold.cyan(os.homedir())
)

// =========== Uptime =========== //
console.log((os.uptime() / 60) / 60)