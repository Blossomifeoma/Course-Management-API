const mongoose = require("mongoose");

const {schema} = mongoose

const instructorCourseDetailsSchema = new schema(
    {
    instructorId: { 
        type: String, 
        required: true }, // From User Management API
     program: { 
        type: schema.Types.ObjectId,
        ref: "Program",
        required: true,
    },
    Level: {
        type: schema.Types.ObjectId,
        ref: "Level",
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
    testsUploaded: { 
        type: schema.Types.ObjectId, 
        ref: "Test",
    },
    assignmentsCreated: { 
        type: schema.Types.ObjectId, 
        ref: "assignment" 
    },
});

const InstructorCourse = mongoose.model("instructorCourse", instructorCourseDetailsSchema);

module.exports = InstructorCourse;