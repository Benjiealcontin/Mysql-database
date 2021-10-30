const Connection = require('../database/Connection')

module.exports = async (id, firstname, lastname) => {
  try {
    const query = `UPDATE ` +
                    `students ` +
                  `SET ` +
                    `firstname = '${firstname}', ` +
                    `lastname = '${lastname}' ` +
                  `WHERE ` +
                    `id = ${id}`

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}