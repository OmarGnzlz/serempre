const { nanoid } = require('nanoid')
const md5 = require('md5')
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

        const hashPassword = md5(password)

        const user = {
            name,
            email,
            password:hashPassword
        }

        await store.add(user)
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
        const hashPassword = md5(password)

        const user = {
            name,
            email,
            password:hashPassword
        }

        await store.update(user, id)
    } catch (error) {
        throw new Error(error)
    }
}
const deleteUser = async(id) => {
    try {

        const user = await store.findUSerById(id)

        if(!user){
            throw new Error('User doest not exists')
        }

        await store.remove(id)
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