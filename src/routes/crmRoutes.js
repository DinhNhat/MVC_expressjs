import { addNewContact, 
        getContacts, 
        getContactById, 
        updateContactById,
        deleteContactById,
 } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contacts')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        
        .post(addNewContact);

    app.route('/contacts/:contactID')
        .get(getContactById)

        .put(updateContactById)

        .delete(deleteContactById);
}

export default routes;