import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link></Link>
                        <Link className="link" to="/">
                        HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        DISCUSS
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/problem">
                        PROBLEM
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <div>
                        <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src="http://anniekateshomeschoolreviews.com/wp-content/uploads/2015/05/Online-picture1.jpg"
                            alt=""
                        />
                        </Link>
                        <span className="topListItem">
                            {user && "LOGOUT"}                
                            <i className="topIcon fa-regular fa-share-from-square"></i>
                        </span>
                    </div>

                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                            LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                            REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}