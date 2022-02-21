import { Link } from "react-router-dom";

function Header() {
    return(
        <div>
            <Link to={"/"}><h1>Find Ani</h1></Link>
            <hr/>
        </div>
    );
}

export default Header;