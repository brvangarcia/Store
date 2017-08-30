const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');
const { Region } = require('./regions');

const Country = sequelize.define('countries', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Country.sync({ force: true }).then(() => {
        // Table created
        for (var i = 0; i <= 5; i++) {
                        Country.create({
                            name: faker.address.country(),
                        })
                      }
    });
};

module.exports = {
    Country,
    sync,
};
