import React, { useState } from "react";
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { SidebarData } from "./sidebardata";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from "react-icons/lib";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={sidebar ? 'nav-menu' : 'nav-menu-active'}>
                <nav>
                    <div className="navbar">
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <ul className="nav-menu-items">
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li className={item.cName}>
                                        {sidebar === true ?
                                            <Link to={item.path}>
                                                {item.icon}
                                            </Link>
                                            :
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        }

                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>
        </IconContext.Provider>
    )
}
export default Navbar;