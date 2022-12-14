import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
const userId = localStorage.getItem('id');
const listname = localStorage.getItem('newList')
export const SidebarData = [

    {
        title: 'Home',
        path: `/home/${userId}`,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'My Lists',
        path: `/userLists/${listname}`,
        icon: <MdIcons.MdOutlinePlaylistAddCheck />,
        cName: 'nav-text'
    },
    {
        title: 'Compare',
        icon: <MdIcons.MdCompare />,
        cName: 'nav-nested',
        children: [
            {
                title: "Influencers",
                path: "/compareInfluencers",
                cName: 'nav-nested',
            },
            {
                title: "Lists",
                path: "/compareLists",
                cName: 'nav-nested',
            }
        ]
    },
    {
        title: 'Calculator',
        path: '/calculator',
        icon: <AiIcons.AiFillCalculator />,
        cName: 'nav-text'
    },
]