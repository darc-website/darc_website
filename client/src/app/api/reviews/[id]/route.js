import dbConnect from '../../../../../utils/connect';
import Review from '../../../../../models/reviewModel';

// PUT method to update a review by ID
export async function PUT(req) {
    try {
        const id = req.nextUrl.pathname.split('/').pop();
        const body = await req.json();

        await dbConnect();

        const review = await Review.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!review) {
            return new Response(JSON.stringify({ success: false, message: 'Review not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ success: true, data: review }), { status: 200 });
    } catch (error) {
        console.error('Error updating review:', error.message);
        return new Response(JSON.stringify({ success: false, error: 'Failed to update review' }), { status: 500 });
    }
}

// DELETE method to remove a review by ID
export async function DELETE(req) {
    try {
        const id = req.nextUrl.pathname.split('/').pop();

        await dbConnect();

        const deletedReview = await Review.findByIdAndDelete(id);

        if (!deletedReview) {
            return new Response(JSON.stringify({ success: false, message: 'Review not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ success: true, data: {} }), { status: 200 });
    } catch (error) {
        console.error('Error deleting review:', error.message);
        return new Response(JSON.stringify({ success: false, error: 'Failed to delete review' }), { status: 500 });
    }
}