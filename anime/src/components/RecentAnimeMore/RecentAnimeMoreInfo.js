import { useEffect, useLayoutEffect, useState } from "react";
import RecentAnimeMoreInfoComp from "./RecentAnimeMoreInfoComp";
import styles from "../../css/RecentAnimeMoreInfo/RecentAnimeMoreInfo.module.css"

function RecentAnimeMoreInfo({activePage}) {
    const [loading, setLoading] = useState(true);
    const [allRecentAnime, setAllRecentAnime] = useState([]);
    const [content, setContent] = useState([]);

    const perPageContent = 30;

    const getAllRecentAnime = async() => {
        const json = await(
            await fetch(`https://api.jikan.moe/v4/recommendations/anime`)
        ).json();
        json.data.map(els => (
            els.entry.map(e => (
                setAllRecentAnime(currArr => [...currArr, e])
            ))
        ))
        setLoading(false);
    }

    const showContents = () => {
        setContent([]);
        for(let i = (activePage-1) * perPageContent; i < ((activePage-1) * perPageContent + perPageContent); i++) {
            const ani = allRecentAnime[i];
            console.log(i)
            console.log(ani)
            if(ani === undefined) continue;
            setContent(currArr => [...currArr, <RecentAnimeMoreInfoComp
                image={ani.images.jpg.image_url}
                title={ani.title}
                id={ani.mal_id}
                index={i}
            />])
        }
    }

    useEffect(() => {
        getAllRecentAnime();
    },[])

    useEffect(() => {
        showContents()
    }, [allRecentAnime,activePage])

    return (
        <div className={styles.box}>
            {
                loading ? <h2>Loading...</h2> : content
            }
        </div>
    );
}

export default RecentAnimeMoreInfo;