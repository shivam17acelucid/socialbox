import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
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
        cName: 'nav-text'
    },
    {
        title: 'Calculator',
        path: '/calculator',
        icon: <AiIcons.AiFillCalculator />,
        cName: 'nav-text'
    },
]