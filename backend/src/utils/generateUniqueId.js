const crypto = require('crypto');//eh um apcote do node para crear numeros aleatorios

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}