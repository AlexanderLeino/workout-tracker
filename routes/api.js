const db = require('../models/')
const router = require('express').Router()

//matches api/workouts
router.get('/workouts', async (req, res) => {
    try{
        await db.Workout.find({}).sort({exercises: -1 }), function(err, data) {
            if(err){
                console.log(err)
                console.log('The query has been hit')
            } else {
                
                console.log(data)
                res.json(data)
                
            }
        }
    } catch(e){
        res.status(500).json({e: e.message})
    }
})

// router.put('/api/workouts', async (req, res) => {
//     try{

//     } catch(e){
//         res.status(500).json(e)
//     }
// })


// router.post('/api/workouts', async (req, res) => {
//     try{

//     } catch(e){
//         res.status(500).json(e)
//     }
// })

// router.get('/api/workouts/range', async (req, res) => {
//     try{

//     } catch(e){
//         res.status(500).json(e)
//     }
// })

module.exports = router