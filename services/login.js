const User = require("../models/User");

async function login(username, password) {
    const user = await User.findOne({ _id: username, password });
    return user != null
}

async function register(username, password) {

    const user = new User({
        _id: username,
        password
    });

    await user.save()
}

async function aAddUser(username, password) {

    const user = new User({
        _id: username,
        password
    });

    const savingUser = await user.save()
    return savingUser
}

async function getUsers() {
    const users = await User.find({});
    return users
}

async function deleteUser(username) {
    const deletedUser = await User.deleteOne({ _id: username});
    return deletedUser != null
}

async function searchUsers(query) {
    const users = await User.find(query);
    return users
}


module.exports = { login, register, searchUsers, getUsers, deleteUser, aAddUser}