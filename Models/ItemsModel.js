"use strict"
const { db } = require("./db");
const uuidV4 = require('uuid').v4;

class ItemsModel {
    constructor(db) {
        this.db = db;
    }

    createItem (item) {

    }

    changeItemType (newType, itemID) {

    }

    changeItemName (newName, itemID) {

    }

    changeDefense (newDefense, itemID) {

    }

    changeAttack (newAttack, itemID) {

    }

    changeSpeed (newSpeed, itemID) {

    }

    deleteItem (itemID) {

    }

    getItemData (itemID){
        
    }
}

const itemsModel = new ItemsModel(db);


exports.itemsModel = new ItemsModel(db);