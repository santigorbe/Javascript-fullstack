const {Router} = require("express");
const router = Router();
const employeesCtrl = require("../controllers/employees.controller.js");

router.get("/employees", employeesCtrl.getEmployees)
router.post("/employees", employeesCtrl.createEmployees)
router.get("/employees/:id", employeesCtrl.getEmployee)
router.put("/employees/:id", employeesCtrl.editEmployees)
router.delete("/employees/:id", employeesCtrl.deleteEmployees)

module.exports = router;