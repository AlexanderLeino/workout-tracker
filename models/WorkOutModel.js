const mongoose = require('mongoose')

const Schema = mongoose.schema;

const WorkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
        
    },
    exercises: [
        {
            type: {
                type: String,
                require: true,
            }, 
            name: {
                type: String,
                require:true,
            },
            duration: {
                type: Number,
                require: true,
            },
            weight: {
                type: Number,
                
            },
            reps: {
                type: Number,
                
            },
            sets: {
            type: Number,
            },

            distance: {
                type: Number,

            },
           
        },

    ]
})
const WorkOut = mongoose.model("WorkOut", WorkoutSchema)

module.exports = WorkOut