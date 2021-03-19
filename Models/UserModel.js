"use strict";
const { db } = require("./db");
const uuidV4 = require('uuid').v4;

class UserModel {
    constructor (db) {
        this.db = db;
    }

    createUser (user) {

    }

    deleteUser (userID) {

    }

    changeEmailAddr (newEmail, userID) {

    }

    changeUsername (newUsername, userID) {

    }

    upgradeToAdmin (userID) {

    }

    revokeAdmin (userID) {

    }

    emailVerified (userID) {

    }

    getUserData (userID){

    }

}


const userModel = new UserModel(db);


exports.userModel = new UserModel(db);