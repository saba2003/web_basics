const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { error } = require('console')

// =========== Create Folder =========== //
// fs.mkdir(path.join(path.dirname(__filename), "/images"), {}, error => {
//     if (error) throw error
//     console.log(chalk.underline.bold.cyan("FOLDER CREATED..."))
// })

// =========== Create & Write & Append Text to File =========== //
// fs.writeFile(path.join(path.dirname(__filename), "/images", "text.txt"), "This is my first file", error =>{
//     if (error) throw error

//     console.log(chalk.underline.bold.cyan("WRITE..."))

//     fs.appendFile(path.join(path.dirname(__filename), "/images", "text.txt"), " Hello", error => {
//         if (error) throw error

//         console.log(chalk.underline.bold.cyan("Append..."))
//     })
// })

// =========== Read File =========== //
// fs.readFile(path.join(path.dirname(__filename), "/images", "text.txt"), { encoding: "UTF8" }, (error, data) => {
//     if (error) throw error

//     console.log(chalk.underline.bold.cyan(data))
// })

// =========== Rename File =========== //
// const oldPath = path.join(path.dirname(__filename), "/images", "renamed1.txt")
// const newPath = path.join(path.dirname(__filename), "/images", "renamed.txt")
// fs.rename(oldPath, newPath, error => {
//     if (error) throw error

//     console.log(chalk.underline.bold.cyan("renamed"))

// })

