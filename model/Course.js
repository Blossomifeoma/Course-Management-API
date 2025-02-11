const mongoose = require("mongoose");

const {schema} = mongoose

const courseSchema = new schema(
    { 
        title: { 
            type: String, 
            required: true,
        },
        description: { 
            type: String,
            required: true,
        },
        semester: { 
            type: schema.Types.ObjectId,
            ref: "semester",
            required: true,
        },  
        // Fetched from the user API
        instructorId: { 
            type: schema.Types.ObjectId, 
            ref: "instructor",
            required: true,
        }, 
        Program: {
            type: schema.Types.ObjectId,
            ref: "Program",
            required: true,
        },        
        Level: {
            type: schema.Types.ObjectId,
            ref: "Level",
            required: true,    
        },
        studentsEnrolled: [{ 
            type: String,
        }], // Array of student IDs
        createdAt: { 
            type: Date, 
            default: Date.now,
        }, //timestamp
        duration: {
            type: String,
            required: true,
            default: "4 months",
        }
    });
    const Course = mongoose.model("Course", courseSchema);

module.exports = Course;