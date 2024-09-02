import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    job: {
        type: String,
        required: true,
        trim: true
    },
    storedDate: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);