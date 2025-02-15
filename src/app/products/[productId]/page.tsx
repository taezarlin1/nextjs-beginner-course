export default async function ProductDetails({params}:{
    params: Promise<{productId: string}>
}) {
    const productId = (await params).productId;
    return <h2>Details about product {productId}</h2>
}