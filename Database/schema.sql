CREATE TABLE IF NOT EXISTS Users (
    userID TEXT PRIMARY KEY,  -- This will be randomly generated and will help distinguish
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    emailVerfied BOOLEAN NOT NULL DEFAULT 0, -- If we have time to add a shop this will be necessary. Must verify email before purchases
    admin BOOLEAN NOT NULL DEFAULT 0, -- 0 is user, 1 is admin
    playerNames TEXT NOT NULL -- This will hold all of the users different plyer names
);

CREATE TABLE IF NOT EXISTS Players (
    playerName TEXT PRIMARY KEY,
    user TEXT,
    inventory TEXT,
    defense INTEGER DEFAULT 1,
    attack INTEGER DEFAULT 1,
    speed INTEGER DEFAULT 1,
    FOREIGN KEY (user) REFERENCES Users(userID),
    FOREIGN KEY (inventory) REFERENCES Inventory(inventoryID)
);

CREATE TABLE IF NOT EXISTS Inventory (
    inventoryID TEXT PRIMARY KEY,
    user TEXT,
    player TEXT,
    equippedHelmet TEXT DEFAULT 'EMPTY',
    equippedChestplate TEXT DEFAULT 'EMPTY',
    equippedGreaves TEXT DEFAULT 'EMPTY',
    equippedWeapons TEXT DEFAULT 'EMPTY',
    extraItems TEXT DEFAULT 'EMPTY',
    FOREIGN KEY (user) REFERENCES Users(userID),
    FOREIGN KEY (player) REFERENCES Inventory(playerName) -- This is useful for users with multiple players
);

CREATE TABLE IF NOT EXISTS Items (
    itemID TEXT PRIMARY KEY,
    itemName TEXT NOT NULL,
    itemType TEXT NOT NULL,
    defenseBoost INTEGER DEFAULT 0,
    attackBoost INTEGER DEFAULT 0,
    speedBoost INTEGER DEFAULT 0
);
