const user = require('../controller/user/network')

const routes = (app) => {
    app.use('/user', user)
}

module.exports = routes