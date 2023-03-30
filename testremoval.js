const Recipe = require('./models/Recipe')

require('dotenv').config();
require('./configs/database');

function deleteData() {
    Recipe.deleteMany({})
        .then(function (results) {
            return Recipe.find({})
        })
        .then(function (results) {
            console.log(results)
        })
        .catch(function (err) {
            console.log(err)
        })
}

deleteData()