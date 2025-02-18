const mongoose = require("mongoose");

const {schema} = mongoose;

const testSchema = new schema(
    {
        title: { 
            type: String, 
            required: true,
        },
        description: { 
            type: String,
            required: true,
        },
        courseId: { 
            type: schema.Types.ObjectId, 
            ref: "Course",
            required: true,
        },
        Program: {
            type: schema.Types.ObjectId,
            ref: "Program",
            required: true,
        },        
        score: {
            type: Number,
            required: true,
        },
        duration: { 
            type: String, 
            required: true,
            default: "30 minutes",
        },
        testDate: { 
            type: Date, 
            required: true,
        },
        testTime: { 
            type: String, 
            required: true,
        },
        testType: { 
            type: String, 
            required: true,
            default: "Quiz",
        },
        testStatus: { 
            type: String, 
            required: true,
            default: "pending",
            enum: ["pending", "ready"],
       },
       questions: {
            type: schema.Types.ObjectId,
            ref: "Questions",
            required: true,
       },   
       Level: {
           type: schema.Types.ObjectId,
           ref: "Level",
           required: true,     
       },
      createdBy: { 
            type: schema.Types.ObjectId, 
            ref: "instructorCoursegg",
            required: true,
        }, 
        semester: { 
            type: schema.Types.ObjectId, 
            ref: "semester",
            required: true,
        },
        academicSession: { 
            type: schema.Types.ObjectId, 
            ref: "academicSession",
            required: true,
        },
        createdAt: { 
            type: Date, 
            default: Date.now,
        }, //timestamp
    });
const Test = mongoose.model("Test", testSchema);

module.exports = Test;