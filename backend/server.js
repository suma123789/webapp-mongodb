const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect(
    'mongodb://mongodb:27017/employeedb'
);

const EmployeeSchema = new mongoose.Schema({
    name: String
});

const Employee = mongoose.model(
    'Employee',
    EmployeeSchema
);

app.post('/employees', async (req, res) => {

    const employee = new Employee({
        name: req.body.name
    });

    await employee.save();

    res.json(employee);
});

app.get('/employees', async (req, res) => {

    const employees =
        await Employee.find();

    res.json(employees);
});

app.listen(3000, () => {
    console.log("API Started");
});