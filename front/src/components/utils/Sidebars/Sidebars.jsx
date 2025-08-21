import "./sidebar.css";
import { useState } from "react";
import Icons from "../../Icons/Icons";

const Sidebar = ({ user, navItems, setVewPanel }) => {

    const [active, setActive] = useState(1);

    const goto = (index, link) => { setActive(index); setVewPanel(link) };

    return (
        <aside className="sidebar-4">
            <div className="inner">

                <div className="header">
                    <img src={user?.avatar?.[0] ?? '/cat.png'} alt="img" />
                    <h2>{user.name.toUpperCase()}</h2>
                </div>

                <nav
                    className="menu"
                    style={{ "--top": `${active === 0 ? 0 : active * 56}px` }}
                >
                    {navItems.map((item, index) => (
                        <button
                            className={active === index ? "active" : ""}
                            key={index}
                            type="button"
                            onClick={() => goto(index, item.link)}
                        >
                            <span><Icons type={item.icon} color="#D9D9D9" size="25px" /> </span>
                            <p>{item.name}</p>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;