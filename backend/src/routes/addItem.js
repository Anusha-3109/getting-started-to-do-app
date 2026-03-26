const db = require('../persistence');
const { v4: uuid } = require('uuid');

module.exports = async (req, res) => {
    console.log("New item added");
    const item = {
        id: uuid(),
        name: req.body.name,
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
