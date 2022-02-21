import { Link } from "react-router-dom";
import styles from "../../css/RecentAnimeMoreInfo/RecentAnimeMoreInfo.module.css"

function RecentAnimeMoreInfoComp({image, title, id, index}) {
    if(title.length >= 30) {
        title = title.slice(0, 19) + "...";
    }

    return (
        <Link to={`/anime_info/${id}`} key={index}>
            <div className={styles.aniBox}>
                <img src={image}/>
                <strong>{title}</strong>
            </div>
        </Link>
    );
}

export default RecentAnimeMoreInfoComp;