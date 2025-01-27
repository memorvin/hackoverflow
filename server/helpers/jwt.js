const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET

module.exports = {
  generateToken(payload) {
    return jwt.sign(payload, jwtSecret, { expiresIn: "30m" })
  },
  verifyToken (token) {
    return jwt.verify(token, jwtSecret)
  }
}