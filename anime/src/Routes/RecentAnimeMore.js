import Header from "../components/Header";
import RecentAnimeMoreInfo from "../components/RecentAnimeMore/RecentAnimeMoreInfo";
import Pagination from "react-js-pagination";
import { useState } from "react";

function RecentAnimeMore() {
    const [activePage, setActivePage] = useState(1);

    function handlePageChange(pageNumber) {
        setActivePage(pageNumber);
        window.scrollTo(0, 0);
    }
    return (
        <div className="bigBox">
            <Header/>
            <RecentAnimeMoreInfo activePage={activePage}/>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={handlePageChange.bind(this)}
            />
        </div>
    );
}

export default RecentAnimeMore;