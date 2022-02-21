import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/AnimeInfo/AnimeInfo.module.css";

function AnimeInfoComp({ani}) {
    const [relateAnis, setRelateAnis] = useState([]);
    const getRelateAnimeImg = async(mal_id) => {
        const json = await(
            await fetch(`https://api.jikan.moe/v3/anime/${mal_id}`)
        ).json();
        setRelateAnis(currArr => [json, ...currArr])
    }

    const cutTitle = (title) => {
        if(title === undefined) return;
        if(title.length >= 30) {
            title = title.slice(0, 30) + "..."
        }
        return title;
    }

    useEffect(() => {
        for(let relatedAni in ani.related) {
            ani.related[relatedAni].map(e =>(
                getRelateAnimeImg(e.mal_id)
            ))
        }
    }, [])
    console.log(ani)
    return (
        <>
            <fieldset>
                <legend>{ani.title_japanese}</legend>
                <img src={ani.image_url} alt="no image"/>

                <div>
                    <p><strong>방영 기간</strong> : &nbsp;
                        {ani.aired.prop.from.year}년&nbsp;
                        {ani.aired.prop.from.month}월&nbsp;
                        {ani.aired.prop.from.day}일
                        ~&nbsp;
                        {ani.aired.prop.to.year}년&nbsp;
                        {ani.aired.prop.to.month}월&nbsp;
                        {ani.aired.prop.to.day}일
                    </p>
                    <hr/>

                    <p><strong>회차 당 시간</strong> : {ani.duration}</p>
                    <hr/>

                    <p><strong>총 에피소드</strong> : {ani.episodes}</p>
                    <hr/>

                    <p><strong>줄거리</strong>
                    <br/>
                    {ani.synopsis}
                    </p>

                    <strong>장르</strong>
                    <br/>
                    <ul>
                        {ani.genres.map(genre => (
                            <li key={genre.mal_id}>{genre.name}</li>
                        ))}
                    </ul>
                    <hr/>
                    
                    <p><strong>제작사</strong></p>
                    <ul>
                        {ani.studios.map((studio) => (
                            <li key={studio}><a href={studio.url}>{studio.name}</a></li>
                        ))}
                    </ul>
                    <hr/>

                    <p><strong>평점</strong> : {ani.score}</p>
                    <hr/>
                    <p><strong>트레일러</strong></p>
                    <iframe src={ani.trailer_url} style={{
                        width:"600px",
                        height:"400px"
                    }}></iframe>
                    <hr/>
                </div>
            </fieldset>
            <p><strong>관련 작품</strong></p>
            <div className={styles.relateAni}>
                {relateAnis.map((relateAni, index) => (
                    <Link key={index} to={`/anime_info/${relateAni.mal_id}`}>
                        <div>
                            <img src={relateAni.image_url}/>
                            <p>{cutTitle(relateAni.title)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default AnimeInfoComp;