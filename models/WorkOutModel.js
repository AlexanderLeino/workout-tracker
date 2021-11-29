const mongoose = require('mongoose')

const Schema = mongoose.schema;

const WorkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
        
    },
    exercises: [
        {
            type: String, 
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
                require:true,
            },
            reps: {
                type: Number,
                require:true
            },
            sets: {
            type: Number,
            require: true,
        },

        }
    ]
})
const WorkOut = mongoose.model("WorkOut", WorkoutSchema)

module.exports = WorkOut