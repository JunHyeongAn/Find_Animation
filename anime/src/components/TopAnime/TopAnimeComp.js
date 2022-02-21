import styles from "../../css/TopAnime/TopAnime.module.css"

function TopAnimeComp({rank, title, image_url}) {
    return (
        <div className={styles.top_ani_comp}>
            <div>
                <h3>{rank}위</h3>
                <img src={image_url}/>
            </div>
            <h2>{title}</h2>
        </div>
    );
}

export default TopAnimeComp;