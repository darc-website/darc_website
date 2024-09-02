import { connectDB } from '../../../../utils/connect'; // Ensure correct import
import Review from '../../../../models/reviewModel';

// POST handler for adding reviews
export async function POST(req) {
    try {
        // Parse the request body as JSON
        const body = await req.json();

        // Connect to the database
        await connectDB();

        // Create a new review record with the parsed data
        const review = new Review(body);

        // Save the review to the database
        await review.save();

        // Respond with the created review details
        return new Response(JSON.stringify({
            message: 'Review added successfully',
            review,
        }), { status: 201 }); // 201 status for resource creation

    } catch (error) {
        console.error('Error creating review:', error);
        return new Response(JSON.stringify({ error: 'Error creating review' }), { status: 500 });
    }
}

// GET handler for fetching reviews
export async function GET() {
    try {
        await connectDB();
        const reviews = await Review.find({}).sort({ storedDate: -1 });
        return new Response(JSON.stringify({ reviews }), { status: 200 });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch reviews' }), { status: 500 });
    }
}