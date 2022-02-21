import Header from "../components/Header";
import TopAnime from "../components/TopAnime/TopAnime";
import RecentRecommnad from "./RecentRecommnad";

function Home() {
    return (
        <div>
            <Header/>
            <h2>Top Anime</h2>
            <TopAnime/>
            <hr/>
            <h2>최근 만화</h2>
            <RecentRecommnad/>
        </div>
    );
}

export default Home;