import { notFound } from "next/navigation";

export default async function ReviewDetails({params}:{
    params: Promise<{productId: string, reviewId: string}>
}) {
    const {productId, reviewId} = await params;
    if (parseInt(reviewId) > 1000){
        notFound();
    }
    return <h2>Review {reviewId} for Product {productId}</h2>
}