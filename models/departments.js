const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');
const { Location } = require('./locations');

const Department = sequelize.define('departments', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Department.sync({ force: true }).then(() => {
        // Table created
for (var i = 0; i <= 5; i++) {
                        Department.create({
                            name: `${faker.company.bsNoun()} Department`,
                        })
}
    });
};

module.exports = {
    Department,
    sync,
};
