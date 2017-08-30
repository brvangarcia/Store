const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');

const Employee = sequelize.define('employees', {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hireDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    salary: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: false,
    },
    comissionPercent: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
});

const sync = () => {
    Employee.sync({ force: true }).then(() => {
        for (var i = 0; i <= 5; i++) {


                        Employee.create({
                            fullName: faker.name.findName(),
                            email: faker.internet.email().toLowerCase(),
                            phoneNumber: faker.phone.phoneNumber(),
                            hireDate: faker.date.past(),
                            salary: faker.finance.amount(),
                            comissionPercent: faker.random.number(),
                        })
                        }
    });
};


module.exports = {
    Employee,
    sync,
};
