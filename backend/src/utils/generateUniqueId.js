
const crypto = require('crypto')

module.exports = function fenerateUniqueId() {
  return crypto.randomBytes(4).toString('HEX')
}