import Link from "next/link";

export default async function NewsArticle( { params, searchParams }:{
    params:Promise<{articleId: string}>;
    searchParams: Promise<{lang: "en" | "es" | "fr"}>
}){ 
    const {articleId} = await params;
    const {lang="en"} = await searchParams;
    const language = {
        en: "English",
        es: "Spanish",
        fr: "French"
    }
    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in <span style={{fontWeight: "bold"}}>{language[lang]}</span></p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}