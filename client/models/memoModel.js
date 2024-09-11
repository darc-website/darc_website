import mongoose from 'mongoose';

const memoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Memo = mongoose.models.Memo || mongoose.model('Memo', memoSchema);

export default Memo;