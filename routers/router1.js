const express = require('express')
const api_methods = require('../api_Methods')
const router = new express.Router();


router.get('/', (request, response) => {
    response.send("<h1>Welcome ALL</h1>")
})


router.get('/getAllEmployees', api_methods.getAllEmployee);
router.get('/Employee/:empid', api_methods.getEMPById);
router.post('/addNewEmp', api_methods.addNewEmployee);
router.put('/updateEmployee/:empid', api_methods.updateEMPById);
router.delete('/deleteEmployee/:empid', api_methods.deleteEMPById);


module.exports = router;
