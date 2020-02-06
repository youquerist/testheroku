const router = require('express').Router();


router.get('/test',(req, res)=>{
    res.send({method: "get"});
});

module.exports = router;
