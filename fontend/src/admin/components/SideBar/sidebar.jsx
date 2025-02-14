import "./style.scss";

function SideBar() {
    return (
        <>
            <div className="sidebar">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <a href="#link1" className="sidebar__link">Dashboard</a>
                    </li>
                    <li className="sidebar__item">
                        <a href="admin/posts" className="sidebar__link">Post management</a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#link3" className="sidebar__link">Setting</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideBar;