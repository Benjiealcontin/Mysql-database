const Connection = require('../database/Connection')

module.exports = async (firstname, lastname) => {
  try {
    const query = `INSERT INTO ` +
                    `students ` +
                  `VALUES ` +
                    `(null, '${firstname}', '${lastname}')`

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}