import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import AnimeInfoComp from "./AnimeInfoComp";

function AnimeInfo() {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    const getAnime = async() => {
        const json = await(
            await fetch(`https://api.jikan.moe/v3/anime/${id}`)
        ).json();
        setAnime(json);
        setLoading(false);
    }
    useEffect(() => {
        getAnime();
        
    }, [useParams()]);

    return(
        <div>
            <Header/>
            <h1>{anime.title_english}({anime.title_japanese})</h1>
            {loading ? <h2>Loading...</h2> : <AnimeInfoComp ani={anime}/>}
        </div>
    );
}

export default AnimeInfo;