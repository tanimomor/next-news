import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/news/news-list";

export default function DefaultLatestPage({params}){
    const latestNews = getLatestNews();

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    )
}