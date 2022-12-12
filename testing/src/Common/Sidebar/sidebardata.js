import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
const userId = localStorage.getItem('id');
export const SidebarData = [

    {
        title: 'Home',
        path: `/welcome/${userId}`,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'My Lists',
        path: '/userLists/hey',
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