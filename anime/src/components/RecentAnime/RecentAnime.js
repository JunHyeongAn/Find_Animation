import { useEffect, useState } from "react";
import RecentAnimeComp from "./RecentAnimeComp";

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
            if(recentAnime[i] !== undefined)
                arr.push(recentAnime[i].entry)
        }
        return arr;
    }

    useEffect(() => {
        getAnime();
    }, [])

    return(
        <RecentAnimeComp recentAni={cutAniList()}/>
    );
}

export default RecentAnime;