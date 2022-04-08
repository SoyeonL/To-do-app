const validator = require('validator');

const Ajv = require("ajv");
const ajv = new Ajv({allErrors: true, coerceTypes:true});

exports.courseFormValidator = (req,res,next)=>{
    let schema = {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                minLength: 2,
                maxLength: 12,
                errorMessage: {
                    minLength: "Course name should be longer than 2 characters",
                    maxLength: "Course name should be no longer than 12 characters"
                }
           }
        },
        required: ['name'],
        errorMessage: {
            required: {
                name: "Please enter the course name"
            }
        }
    }
    const validate = ajv.compile(schema);
    validate(req.body);
    res.locals.validationErrors = validate.errors;
    
    next();
}

exports.taskFormValidator = (req,res,next)=>{
    let schema = {
        type: 'Object',
        properties: {
            description: {
                type: 'string',
                minLength: 2,
                maxLength: 25,
                errorMessage: {
                    minLength: "Please type more than 2 characters",
                    maxLength: "Please type less than 25 characters"
                }
            },
            course: {
                type: 'string'
            }
        },
        required: [description, course],
        errorMessage: {
            required: {
                description: "Please enter your task",
                course: "Please choose a course"
            }
        }
    }
    const validate = ajv.compile(schema);
    validate(req.body);
    res.locals.validationErrors = validate.errors;
    
    next();
}