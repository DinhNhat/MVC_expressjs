import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = req.body;
    
    // add multiple documents
    if(Array.isArray(newContact)) {
        Contact.insertMany(newContact, (err, contacts) => {
            if(err) {
                res.send(err);
            }
            res.json(contacts);
        });
    } else {
        // add a single document
        let newContact = new Contact(req.body);
        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContactById = (req, res) => {
    const filter = { _id: req.params.contactID };
    const update = req.body;
    Contact.findOneAndUpdate(filter, update, { new: true, useFindAndModify: false }, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const deleteContactById = (req, res) => {
    const filter = { _id: req.params.contactID };
    Contact.findByIdAndDelete(filter, (err, contact) => {
        if(err) {
            res.send(err);
        }
        console.log('Deleted: ', contact);
        res.json({message: 'successfully deleted contact'});
    });
}