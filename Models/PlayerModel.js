"use strict";
const { db } = require("./db");
const uuidV4 = require('uuid').v4;

class PlayerModel {
    constructor (db) {
        this.db = db;
    }

    createPlayer (player) {

    }

    deletePlayer (playerName) {

    }

    changeDefense (newDefense, playerName) {

    }

    changeAttack (newAttack, playerName) {

    }

    changeSpeed (newSpeed, playerName) {

    }

    getStats (playerName) {
        
    }

}


const playerModel = new PlayerModel(db);


exports.playerModel = new PlayerModel(db);