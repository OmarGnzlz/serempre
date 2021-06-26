const firebase = require('../../db')
const Points = require('../../models/points')
const firestore = firebase.firestore()


const add = async(data) => {
    try {
        await firestore.collection('users').doc('subcollection').collection('points').doc().set(data)
    } catch (error) {
        throw new Error(error)
    }
}
const update = async(data, id) => {
    try {
        await firestore.collection('users').doc('subcollection/points').doc(id).update(data)
    } catch (error) {
        throw new Error(error)
    }
}
const remove = async(id) => {
    try {
         await firestore.collection('users').doc('subcollection').collection('points').doc(id).delete()
    } catch (error) {
        throw new Error(error)
    }
}



module.exports ={
    add, 
    update,
    remove,
}