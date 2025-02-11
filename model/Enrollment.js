const mongoose = require("mongoose");

const {schema} = mongoose

const enrollmentSchema = new schema(
    {
    courseId: { 
        type: schema.Types.ObjectId, 
        ref: "Course",
        required: true,
    },
        studentId: { 
            type: String, 
            required: true,
        }, //from User API
    enrolledAt: {
        type: Date,
        default: Date.now,
    } //timestamp

});
 const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = Enrollment;