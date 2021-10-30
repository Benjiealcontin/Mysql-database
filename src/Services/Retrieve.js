const Connection = require('../database/Connection')

module.exports = async (fields) => {
  try {
    const query = `SELECT ` +
                    `${fields} ` +
                  `FROM ` +
                    `students`

    const results = await Connection(query)

    return results
  } catch (err) {
    return []
  }
}