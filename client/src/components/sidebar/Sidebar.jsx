// import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        {/* <Link className="link" to="/posts?cat=Life"> */}
                            Arrays
                        {/* </Link> */}
                    </li>
                    <li className="sidebarListItem">
                        {/* <Link className="link" to="/posts?cat=Music"> */}
                            DP
                        {/* </Link> */}
                    </li>
                    <li className="sidebarListItem">
                        {/* <Link className="link" to="/posts?cat=Sport"> */}
                            Linked list
                        {/* </Link> */}
                    </li>
                    <li className="sidebarListItem">
                        {/* <Link className="link" to="/posts?cat=Style"> */}
                            Graphs
                        {/* </Link> */}
                    </li>
                    <li className="sidebarListItem">
                        {/* <Link className="link" to="/posts?cat=Tech"> */}
                            Greedy
                        {/* </Link> */}
                    </li>
                 
                </ul>
            </div>
            <div className="sidebarItemBottom">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}