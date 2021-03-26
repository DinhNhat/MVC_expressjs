import { getStudents, 
    addStudent, 
    getStudentById, 
    updateStudentById,
    deleteStudentById,
} from '../controllers/studentController';

const studentRoutes = (app) => {

app.route('/students')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getStudents)
    
    .post(addStudent);

app.route('/students/:studentId')
    .get(getStudentById)

    .put(updateStudentById)

    .delete(deleteStudentById);
}

export default studentRoutes;