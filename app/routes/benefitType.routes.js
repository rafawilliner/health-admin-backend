module.exports = app => {
    
    const benefitTypes = require("../controllers/benefitType.controller");
    var router = require("express").Router();
    router.get("/", benefitTypes.findAll);

    app.use('/api/benefitType', router);
}