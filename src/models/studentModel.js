import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create a subdocument
const score = new Schema({
    score: {
        type: Number
    },
    type: String
})

export const StudentSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.Number,
        indexes: true
    },
    name: String,
    scores: [score],
    created_date: {
        type: Date,
        default: Date.now()
    }
});