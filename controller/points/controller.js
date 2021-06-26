const store = require('./store')


const createPoints = async(body) => {
    try {
        const { quantity, reasons } = body

        if(!quantity || !reasons ){
            throw new Error(error)
        }

        const points = {
            quantity,
            reasons,
        }

        await store.add(points)
    } catch (error) {
        throw new Error(error)
    }
}
const updatePoints = async(body, id) => {
    try {
        const { quantity, reasons } = body

        if(!quantity || !reasons || !id){
            throw new Error('Missing data')
        }

        const points = {
            quantity,
            reasons,
        }

        await store.add(points, id)
    } catch (error) {
        throw new Error(error)
    }
}
const deletePoints = async(id) => {
    try {
        await store.remove(id)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createPoints, 
    updatePoints,
    deletePoints
}