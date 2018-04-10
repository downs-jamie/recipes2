console.log('loading router module')
var express = require('express');
var router = express.Router();
const passport = require('passport');
const Recipes = require('../models/recipes')
router.use(function timeLog (req, res, next) {
    let d = new Date();
    next()
})
function ingridientProcessor(array, i, ingredient){
    let tempIndex = false;
    array.forEach((ingr, index)=>{ 
        let lineArray = ingr.split(' ')
        let yesno = lineArray.some((element)=>{
            return ingredient == element
        })
        if (yesno){
            tempIndex = i;
        }
    })
    return tempIndex
}
router.route('/getRecipes')
    .get((req, res)=>{
        console.log('pulling info from database')
        Recipes.findAll().then((recipes) => {
            res.json(recipes)
        })
    })
    .post((req, res)=>{
        let matchArray = []
        let ingredient = req.body.data;
        console.log('searching for recipe with', ingredient)
         Recipes.findAll().then((recipes) => {
            for (let i=0; i < recipes.length; i++){
                let ingrIndex = ingridientProcessor(JSON.parse(recipes[i].ingredients), i, ingredient);      
                if (ingrIndex !== false){
                    matchArray.push(ingrIndex)
                }
            }
            let target = matchArray.map((el, i) => recipes[el])
            res.send(target)
        })
    })

    .delete((req, res)=>{
    })

router.route('/register')
    .get((req, res)=>{
        console.log('serving register page');
    })
    .post((req, res)=>{
        console.log(req.body)
})

router.get('/success/:name',(req, res)=>{
    console.log(req.body)
})

function rebuilder(recipes){
    var rebuiltRecipes = recipes.map((recipe, index)=>{
        return recipe
    })
    return (rebuiltRecipes)
}

module.exports = router;