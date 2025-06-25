import mongoose from 'mongoose';

const resourcesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String, // ISO 8601 string format (e.g., '2025-01-22')
            required: true,
        },
        category: {
            type: String,
            enum: ['언론보도', '출판물', '교육자료', '기타'],
            required: true,
        },
        content: {
            type: Object,
            required: true,
        },
        temp: {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }
);

const Resources =
    mongoose.models.Resources || mongoose.model('Resources', resourcesSchema);

export default Resources;