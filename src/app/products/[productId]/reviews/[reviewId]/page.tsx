export default async function ReviewDetails({params}:{
    params: Promise<{productId: string, reviewId: string}>
}) {
    const {productId, reviewId} = await params;
    return <h2>Review {reviewId} for Product {productId}</h2>
}