const mongoose = require("mongoose");

const {schema} = mongoose;

const questionSchema = new schema(
    {
        question:{
            type: String,
            required: true,
        },
        optionA: {
            type: String,
            required: true,
        },
        optionB: {
            type: String,
            required: true,
        },
        optionC: {
            type: String,
            required: true,
        },
        optionD: {
            type: String,
            required: true,
        },
        correctAnswer: {
            type: String,
            required: true,
        },
        createdBy: { 
            type: schema.Types.ObjectId, 
            ref: "instructorCoursegg",
            required: true,
        }, 
    });

    const Question = mongoose.model("Questions", questionSchema);
    
    module.exports = Question;
