import mongoose from 'mongoose';
import { StudentSchema } from '../models/studentModel';

const Student = mongoose.model('Student', StudentSchema);

export const addStudent = (req, res) => {
    let newStudent = req.body;
    
    // add multiple documents
    if(Array.isArray(newStudent)) {
        Student.insertMany(newStudent, (err, students) => {
            if(err) {
                res.send(err.message);
            }
            res.json("ADD student successfully!");
        });
    } else {
        // add a single document
        let newSingleStudent = new Student(req.body);
        newSingleStudent.save((err, student) => {
            if (err) {
                res.send(err);
            }
            res.json(student);
        });
    }
}

export const getStudents = (req, res) => {
    Student.find({}, (err, student) => {
        if(err) {
            res.send(err);
        }
        res.json(student);
    });
}

export const getStudentById = (req, res) => {
    // res.send('GET student by ID successful!');
    Student.findById(req.params.studentId, (err, student) => {
        if(err) {
            res.send(err);
        }
        res.json(student);
    });
}

export const updateStudentById = (req, res) => {
    // res.send('UPDATE student successful!');
    const filter = { _id: req.params.studentId };
    const update = req.body;
    Student.findOneAndUpdate(filter, update, { new: true, useFindAndModify: false }, (err, student) => {
        if(err) {
            res.send(err);
        }
        res.json(student);
    });
}

export const deleteStudentById = (req, res) => {
    // res.send('DELETE student successful!');
    const filter = { _id: req.params.contactID };
    Student.findByIdAndDelete(filter, (err, student) => {
        if(err) {
            res.send(err);
        }
        console.log('Deleted: ', student);
        res.json({message: 'successfully deleted contact'});
    });
}