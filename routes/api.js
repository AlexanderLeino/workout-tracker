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