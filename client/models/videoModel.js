import mongoose from 'mongoose';

// Define the YouTube Video Schema
const youtubeVideoSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,  // Make this required if every video must have a name
    },
    storedDate: {
        type: Date,
        default: Date.now, // Automatically sets the current date and time
    },
});

// Export the model
const YoutubeVideo = mongoose.models.YoutubeVideo || mongoose.model('YoutubeVideo', youtubeVideoSchema);

export default YoutubeVideo;