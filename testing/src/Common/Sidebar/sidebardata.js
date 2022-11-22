import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Home',
        path: '/welcome',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Compare',
        path: '/compare',
        icon: <MdIcons.MdCompare />,
        cName: 'nav-text',
        children: [
            {
                title: "Influencers",
                path: "/compareInfluencers",
                cName: 'nav-text',
            },
            {
                title: "Lists",
                path: "/compareLists",
                cName: 'nav-text',
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