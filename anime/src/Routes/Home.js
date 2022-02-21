import { Link } from "react-router-dom";
import Header from "../components/Header";
import TopAnime from "../components/TopAnime/TopAnime";
import RecentRecommnad from "./RecentRecommnad";

function Home() {
    return (
        <div>
            <Header/>
            <div>
                <h2>Top Anime</h2>
                <p>더보기</p>
            </div>
            <TopAnime/>
            <hr/>
            <div>
                <h2>최근 만화</h2>
                <Link to={`/recentAni`}><p>더보기</p></Link>
            </div>
            <RecentRecommnad/>
        </div>
    );
}

export default Home;