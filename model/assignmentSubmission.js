const mongoose = require("mongoose");

const {schema} = mongoose;

const submissionSchema = new schema(
    {
        assignmentId: { 
            type: schema.Types.ObjectId, 
            ref: "Assignment", 
            required: true 
        },
            studentId: { 
                type: String, 
                required: true 
            }, // From User API
            fileUrl: { 
                type: String, 
                required: true 
            },
            submittedAt: { 
                type: Date, 
                default: Date.now 
            },
            grade: { 
                type: Number, 
                default: null 
            },
            feedback: { 
                type: String 
            }
    });
          const Submission = mongoose.model("assignmentSubmission", submissionSchema);
          
module.exports = Submission;
  