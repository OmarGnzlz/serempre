const { nanoid } = require('nanoid')
const store = require('./store')

const getAllUsers = async() => {
    try {
        return await store.get()
    } catch (error) {
        throw new Error(error)
    }
}
const createUser = async(body) => {
    try {
        const { name, email, password } = body

        if(!name || !email || !password){
            throw new Error(error)
        }

        const user = {
            id: nanoid(),
            name,
            email,
            password
        }

        return await store.add(user)
    } catch (error) {
        throw new Error(error)
    }
}
const updateUser = async(body, id) => {
    try {
        const { name, email, password } = body

        if(!name || !email || !password){
            throw new Error(error)
        }

        const user = {
            id: nanoid(),
            name,
            email,
            password
        }

        return await store.update(user, id)
    } catch (error) {
        throw new Error(error)
    }
}
const deleteUser = async(id) => {
    try {
        return await store.remove(id)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getAllUsers,
    createUser, 
    updateUser,
    deleteUser
}