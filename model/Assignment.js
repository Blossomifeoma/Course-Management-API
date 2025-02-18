const mongoose = require("mongoose");

const {schema} = mongoose

const assignmentSchema = new schema(
    {
      courseId: { 
        type: schema.Types.ObjectId, 
        ref: "Course", 
        required: true 
    },
            instructorId: { 
                type: String, 
                required: true,
            }, // From User API
            title: { 
                type: String, 
                required: true,
            },
            description: { 
                type: String,
            },
            dueDate: { 
                type: Date 
            },
            createdAt: { 
                type: Date, 
                default: Date.now 
            }
          });
          
          const Assignment = mongoose.model("Assignment", assignmentSchema);
          
          module.exports = Assignment;
        
