const user = require('../controller/user/network')
const points = require('../controller/points/network')

const routes = (app) => {
    app.use('/user', user)
    app.use('/points', points)
}

module.exports = routes