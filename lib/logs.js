const { inspect } = require('util');

const color = {
    red: '\x1b[31m',
    orange: '\x1b[38;5;202m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    pink: '\x1b[35m',
    purple: '\x1b[38;5;129m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    reset: '\x1b[0m',
    darkGrey: '\x1b[90m'
}

function getTimestamp() {
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function parse(message) {
    const properties = inspect(message, { depth: 3 });

    const regex = /^\s*["'`](.*)["'`]\s*\+?$/gm;

    const response = [];
    for (const line of properties.split('\n')) {
        response.push(line.replace(regex, '$1'));
    }

    return response.join('\n');
}

function info(message) {
    console.log(`${color.darkGrey}[${getTimestamp()}] ${color.yellow}[INFO]${color.reset} ${parse(message)}`);
}

function warn(message) {
    console.log(`${color.darkGrey}[${getTimestamp()}] ${color.orange}[WARN]${color.reset} ${parse(message)}`); // Corrected label
}

function error(message) {
    console.log(`${color.darkGrey}[${getTimestamp()}] ${color.red}[ERROR] ${parse(message)}${color.reset}`);
}

function success(message) {
    console.log(`${color.darkGrey}[${getTimestamp()}] ${color.green}[SUCCESS]${color.reset} ${parse(message)}`);
}

function debug(message) {
    console.log(`${color.darkGrey}[${getTimestamp()}] ${color.blue}[DEBUG]${color.reset} ${parse(message)}`);
}

function database(message) {
    console.log(`${color.darkGrey}[${getTimestamp()}] ${color.cyan}[DATABASE]${color.reset} ${parse(message)}`);
}

function data(message) {
    console.log(`${color.darkGrey}[${getTimestamp()}]${color.purple} [DATA]${color.reset} ${parse(message)}`);
}

function created(message) {
    console.log(`${color.darkGrey}[${getTimestamp()}] ${color.cyan}[UPDATE]${color.reset} ${parse(message)}`);
}

function custom(message, selection, name) {
    console.log(`${color.darkGrey}[${getTimestamp()}]${color[selection] ?? color.reset} [${name}]${color.reset} ${parse(message)}`);
}

const logs = { info: info, warn: warn, error: error, success: success, debug: debug, database: database, data: data, created: created, custom: custom };

module.exports = { logs }