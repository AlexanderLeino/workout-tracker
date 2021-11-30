const db = require('../models/')
const router = ('express').Router()

router.get('/api/workouts', async (req, res) => {
    try{
        db.Workout.findOne({}).sort({exercises: -1 }, (err, data)=> {
            if(err){
                console.log(err)
            } else {
                console.log('The query has been hit')
                console.log(data)
                res.json(data)
                
            }
        })
    } catch(e){
        res.status(500).json(e)
    }
})

router.put('/api/workouts', async (req, res) => {
    try{

    } catch(e){
        res.status(500).json(e)
    }
})


router.post('/api/workouts', async (req, res) => {
    try{

    } catch(e){
        res.status(500).json(e)
    }
})

router.get('/api/workouts/range', async (req, res) => {
    try{

    } catch(e){
        res.status(500).json(e)
    }
})