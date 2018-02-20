/**
 * Get version
 */
var nodeProcess = require('process')
const packageJSON = require('./package.json')

console.log(packageJSON.version)

nodeProcess.exit(0)
