
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-file-base64.cjs.production.min.js')
} else {
  module.exports = require('./react-file-base64.cjs.development.js')
}
