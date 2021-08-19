const Employee = require("../models/Employee")


const employeeCrtl = {};

employeeCrtl.getEmployees = async (req,res) =>{
    employees = await Employee.find();
    res.json(employees)
};
employeeCrtl.createEmployees = async (req,res) =>{
    const newEmployee = new Employee(req.body); 
    await newEmployee.save()
    res.send({message: "Employee created"});
};
employeeCrtl.getEmployee = async (req,res) =>{
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeeCrtl.deleteEmployees = async (req,res) =>{
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted'});
};

employeeCrtl.editEmployees = async (req,res) =>{
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employee updated'});
};


module.exports = employeeCrtl ;