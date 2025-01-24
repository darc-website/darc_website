import mongoose from 'mongoose';

const AnnouncementSchema = new mongoose.Schema(
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
            enum: ['이벤트', '업데이트', '서비스', '공고', '기타'],
            required: true,
        },
        content: {
            type: Object, // Quill Delta content object
            required: true,
        },
        temp: {
            type: Boolean, // Field to indicate temporary save
            default: false, // Default to false for regular announcements
        },
    },
    { timestamps: true }
);

// Check if the model already exists (to prevent overwriting during hot reload)
const Announcement =
    mongoose.models.Announcement || mongoose.model('Announcement', AnnouncementSchema);

export default Announcement;