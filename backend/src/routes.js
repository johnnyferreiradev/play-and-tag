const { Router } = require('express');


const routes = Router();

routes.get('/videos', ()=>{
    console.log("foi");
})

module.exports = routes;