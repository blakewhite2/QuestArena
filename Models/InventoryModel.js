"use strict";
const { db } = require("./db");
const uuidV4 = require('uuid').v4; 

class InventoryModel {
    constructor (db) {
        this.db = db;
    }
    createInventory (inventory){

    }

    changeHelmet (newHelmet, inventoryID){

    }

    changeChestplate (newChestplate, inventoryID){

    }

    changeGreaves (newGreaves, inventoryID){

    }
    
    changeWeapons (newWeapons, inventoryID){

    }

    changeExtraItems (newExtraItems, inventoryID){

    }

    getInventory (inventoryID){
        
    }
}

const inventoryModel = new InventoryModel(db);


exports.inventoryModel = new InventoryModel(db);