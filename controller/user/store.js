const firebase = require('../../db')
const User = require('../../models/user')
const firestore = firebase.firestore()

const get = async() => {
    try {
        const users =  await firestore.collection('users')
        const data = await users.get()
        const userArray = []
        
        data.forEach(doc => {
            const user = new User(
                doc.id,
                doc.data().name,
                doc.data().email,
                doc.data().password
            )
            userArray.push(user)
        })

        return userArray
    } catch (error) {
        throw new Error(error)
    }
}
const add = async(user) => {
    try {
        await firestore.collection('users').doc().set(user)
    } catch (error) {
        throw new Error(error)
    }
}
const update = async(user, id) => {
    try {
        await firestore.collection('users').doc(id).update(user)
    } catch (error) {
        throw new Error(error)
    }
}
const remove = async(id) => {
    try {
         await firestore.collection('users').doc(id).delete()
    } catch (error) {
        throw new Error(error)
    }
}

const findUSerById = async(id) => {
    try {
        const userRef = await firestore.collection('users').doc(id)
        const user = await userRef.get()

        return user.data()

    } catch (error) {
     throw new Error(error)   
    }
}


module.exports ={
    get,
    add, 
    update,
    remove,
    findUSerById
}