import { error } from "console";
import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({params}:{
    params: Promise<{productId: string, reviewId: string}>
}) {
    const random = getRandomInt(2);
    if(random===1){
        throw new Error("Error Loading Review");
    }
    const {productId, reviewId} = await params;
    if (parseInt(reviewId) > 1000){
        // notFound();
        redirect("/products")
    }
    return <h2>Review {reviewId} for Product {productId}</h2>
}