const { WorkOut } = require('../models/')
const db = require('../models/')
const router = require('express').Router()

//matches api/workouts
router.get('/workouts', async (req, res) => {
    try{
        const data = await db.WorkOut.find()
       
        res.json(data)
        }
     catch(e){
        res.status(500).json(e)
    }
})
// matches /api/workouts
router.put('/workouts/:id', async (req, res) => {
    try{
        
        const id = req.params.id
        const body = req.body
        const updatedWorkOut = await db.WorkOut.findByIdAndUpdate(id, {$push: {exercises: body}},{new:true})
        res.json(updatedWorkOut).status(200)

    } catch(e){
        console.log(e)
        res.status(500).json(e)
    }
})

//matches api/workouts
router.post('/workouts', async (req, res) => {
    try{
    
       const workOut = await db.WorkOut.create({})
       res.json(workOut).status(200)

    } catch(e){
        res.status(500).json(e)
    }
})

router.get('/workouts/range', async (req, res) => {
    try{
    //         View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

    //   * View the total duration of each workout from the past seven workouts on the `stats` page.
        const workouts = await db.WorkOut.find({}).limit(7)
        res.json(workouts)


    } catch(e){
        res.status(500).json(e)
    }
})

module.exports = router