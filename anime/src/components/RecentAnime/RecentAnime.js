import { useEffect, useState } from "react";
import RecentAnimeComp from "./RecentAnimeComp";
import styles from "../../css/RecentAnime/RecentAnime.module.css";
import { Link } from "react-router-dom";

function RecentAnime() {
    const [recentAnime, setRecentAnime] = useState([]);

    const getAnime = async() => {
        const json = await(
            await fetch("https://api.jikan.moe/v4/recommendations/anime")
        ).json();

        setRecentAnime(json.data);
    }

    const cutAniList = () => {
        let arr = [];
        for(let i = 0; i < 10; i++) {
            if(recentAnime[i] !== undefined) {
                recentAnime[i].entry.map(e => (
                    arr.push(e)
                ))
            }
        }
        return arr;
    }

    useEffect(() => {
        getAnime();
    }, [])

    return(
        <div className={styles.recentBox}>
            {
                cutAniList().map(ani => (
                    <Link to={`/anime_info/${ani.mal_id}`} key={ani.mal_id}>
                        <RecentAnimeComp 
                            img={ani.images.jpg.image_url}
                            title={ani.title}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default RecentAnime;