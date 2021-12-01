const mongoose = require('mongoose')



const WorkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
        
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ["Resistance", "Cardio"],
                required: true
            }, 
            name: {
                type: String,
                required:true,
            },
            duration: {
                type: Number,
                required: true,
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
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})
 
WorkoutSchema.virtual("Duration").get(function () {
    let totalDuration = 0
    this.exercises.forEach((exercise) => {
        
        totalDuration += exercise.duration
    })
    return totalDuration
    })
    


const WorkOut = mongoose.model("workout", WorkoutSchema)

module.exports = WorkOut