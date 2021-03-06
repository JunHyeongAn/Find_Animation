import { useEffect, useState } from "react";
import TopAnimeComp from "./TopAnimeComp";
import styles from "../../css/TopAnime/TopAnime.module.css"
import { Link } from "react-router-dom";

function TopAnime() {
    const [loading, setLoading] = useState(true);
    const [topAnimes, setTopAnimes] = useState([]);
    const [topTenAnimes, setTopTenAnimes] = useState([]);

    const getTopAnime = async() => {
        const json = await(
            await fetch(`https://api.jikan.moe/v3/top/anime`)
        ).json();
        setTopAnimes(json.top);
        setLoading(false);
    }

    const getTop10 = () => {
        let arr = [];
        for(let i = 0; i < 10; i++) {
            arr.push(topAnimes[i]);
        }
        console.log(arr)
        setTopTenAnimes(arr);
        console.log(topTenAnimes)
    }

    useEffect(() => {
        getTopAnime();
    }, []);

    useEffect(() => {
        getTop10();
    }, [loading])
    
    return (
        <div className={styles.top_ani_div}>
            {loading ? <h2>Loading...</h2> : 
                topAnimes.map(ani => (
                    <Link to={`/anime_info/${ani.mal_id}`} key={ani.mal_id}>
                        <TopAnimeComp
                            rank={ani.rank}
                            title={ani.title}
                            image_url={ani.image_url}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default TopAnime;