const Recipe = require('./models/Recipe')
const User = require('./models/User')

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
        .finally(function(){
            process.exit()
        })

    }

function deleteUsersData() {
    User.deleteMany({})
        .then(function (results) {
            return User.find({})
        })
        .then(function (results) {
            console.log(results)
        })
        .catch(function (err) {
            console.log(err)
        })
        .finally(function(){
            process.exit()
        })
}

//deleteData();
//deleteUsersData();