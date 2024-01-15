const bcrypt = require('bcryptjs')

async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 12)
  return hashedPassword
}

async function isPasswordValid(password, hashedPassword) {
  const isValid = await bcrypt.compare(password, hashedPassword)
  return isValid
}

// async function comparePasswords(plainPassword, hashedPassword) {
//   return await bcrypt.compare(plainPassword, hashedPassword)
// }

function comparePasswords(plainPassword, storedPassword) {
  return plainPassword === storedPassword
}

module.exports = {
  hashPassword,
  isPasswordValid,
  comparePasswords,
}
