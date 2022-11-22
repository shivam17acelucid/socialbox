import React, { useState } from "react";
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { SidebarData } from "./sidebardata";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [expandCompare, setExpandCompare] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const showExpandedMenu = (item) => {
        if (item.title === 'Compare') {
            setExpandCompare(!expandCompare);
        }
    }

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={sidebar ? 'nav-menu' : 'nav-menu-active'}>
                <nav>
                    <div className={sidebar ? 'navbar-inactive' : 'navbar'} >
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <ul className="nav-menu-items">
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li className={item.cName}>
                                        {
                                            // expandCompare === true ?
                                            //     item.title === 'Compare' ?
                                            //         [item].map((data) =>
                                            //             data.children.map((result) =>
                                            //                 <Link to={result.path} >
                                            //                     <span onClick={() => showExpandedMenu(item)}>{result.title}</span>
                                            //                 </Link>
                                            //             )

                                            //         ) :
                                            //         null
                                            //     :
                                            sidebar === true ?
                                                <Link to={item.path}>
                                                    {item.icon}
                                                </Link>
                                                :
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span onClick={() => showExpandedMenu(item)}>{item.title}</span>
                                                    {item.title === 'Compare' ? <span onClick={() => showExpandedMenu(item)} className='sideicon'>{expandCompare === true ? <AiFillCaretDown /> : <AiFillCaretRight />}</span> : null}
                                                    {expandCompare === true ?
                                                        item.title === 'Compare' ?
                                                            [item].map((data) =>
                                                                data.children.map((result) =>
                                                                    <Link to={result.path} className='nav-nested' >
                                                                        <span onClick={() => showExpandedMenu(item)}>{result.title}</span>
                                                                    </Link>
                                                                )

                                                            ) :
                                                            null : null}
                                                </Link>
                                        }

                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div >
        </IconContext.Provider >
    )
}
export default Navbar;