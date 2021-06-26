const firebase = require('../../db')
const user = require('../../models/user')
const firestore = firebase.firestore()

const get = async() => {
    try {
        
    } catch (error) {
        throw new Error(error)
    }
}
const add = async(user) => {
    try {
        return await firestore.collection('users').doc.set(user)
    } catch (error) {
        throw new Error(error)
    }
}
const update = async() => {
    try {
        
    } catch (error) {
        throw new Error(error)
    }
}
const remove = async() => {
    try {
        
    } catch (error) {
        throw new Error(error)
    }
}


module.exports ={
    get,
    add, 
    update,
    remove
}