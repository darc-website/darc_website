import { connectDB } from '../../../../utils/connect'; // DB connection function
import YoutubeVideo from '../../../../models/videoModel'; // Model for YouTube videos

// POST handler for adding YouTube videos
export async function POST(req) {
    try {
        // Parse the request body as JSON
        const body = await req.json();
        const { videoUrl, name } = body;

        // Log the request body and parsed video URL and name
        console.log('Request Body:', body);
        console.log('Parsed Video URL:', videoUrl);
        console.log('Parsed Video Name:', name);

        // Check if the video URL is provided
        if (!videoUrl || typeof videoUrl !== 'string') {
            console.log('Error: Video URL is missing or not a string');
            return new Response(JSON.stringify({ error: 'Video URL is required and must be a string' }), { status: 400 });
        }

        // Check if the name is provided
        if (!name || typeof name !== 'string') {
            console.log('Error: Name is missing or not a string');
            return new Response(JSON.stringify({ error: 'Name is required and must be a string' }), { status: 400 });
        }

        // Check if the video URL is a valid YouTube link (you can enhance this validation later)
        if (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be')) {
            console.log('Error: Invalid YouTube URL');
            return new Response(JSON.stringify({ error: 'Invalid YouTube URL' }), { status: 400 });
        }

        // Connect to the database
        await connectDB();
        console.log('Database connected successfully');

        // Create a new video record with the provided name and URL
        const newVideo = new YoutubeVideo({ videoUrl, name });

        // Save the video to the database
        await newVideo.save();
        console.log('Video saved successfully:', newVideo);

        // Respond with the created video details
        return new Response(JSON.stringify({
            message: 'Video added successfully',
            video: newVideo,
        }), { status: 201 }); // 201 status for resource creation

    } catch (error) {
        console.error('Error adding video:', error);
        return new Response(JSON.stringify({ error: 'Error adding video' }), { status: 500 });
    }
}

// GET handler for fetching YouTube videos
export async function GET() {
    try {
        await connectDB();
        const videos = await YoutubeVideo.find({});
        return new Response(JSON.stringify({ videos }), { status: 200 });
    } catch (error) {
        console.error('Error fetching videos:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch videos' }), { status: 500 });
    }
}