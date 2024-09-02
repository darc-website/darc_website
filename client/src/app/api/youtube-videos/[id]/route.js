import { connectDB } from '../../../../../utils/connect';
import YoutubeVideo from '../../../../../models/videoModel';

// DELETE method to remove a video by ID
export async function DELETE(req) {
    try {
        const id = req.nextUrl.pathname.split('/').pop();

        await connectDB();

        const deletedVideo = await YoutubeVideo.findByIdAndDelete(id);
        if (!deletedVideo) {
            return new Response(JSON.stringify({ error: 'Video not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'Video deleted successfully' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error deleting video' }), { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const id = req.nextUrl.pathname.split('/').pop();
        const { name } = await req.json();

        await connectDB();

        const updatedVideo = await YoutubeVideo.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedVideo) {
            return new Response(JSON.stringify({ error: 'Video not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'Video updated successfully', video: updatedVideo }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error updating video' }), { status: 500 });
    }
}