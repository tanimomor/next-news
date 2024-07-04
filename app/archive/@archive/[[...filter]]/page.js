import {getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth} from "@/lib/news";
import NewsList from "@/components/news/news-list";
import Link from "next/link";

export default function FilteredNewsPage({params}) {
    const filter = params.filter;
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear) {
        const isYearInValid = !getAvailableNewsYears().includes(+selectedYear);
        const isMonthInValid =  (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))

        if (isYearInValid || isMonthInValid) {
            throw new Error('Invalid filter.')
        }
        news = selectedMonth ? getNewsForYearAndMonth(selectedYear, selectedMonth):getNewsForYear(selectedYear)
        links = selectedMonth ? [] : getAvailableNewsMonths(selectedYear)
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news}/>
    }

    return <>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
                        return <li key={link.id}>
                            <Link href={href}>{link}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
    </>
}