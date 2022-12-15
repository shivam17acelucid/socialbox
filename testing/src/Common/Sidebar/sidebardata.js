import React, { useEffect } from "react";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
const userId = localStorage.getItem('id');
const list = localStorage.getItem('listName')
const lastListName = () => {
    const url = `http://localhost:4000/getUserDetails/${userId}`;
    fetch(url)
        .then((res) => {
            res.json()
                .then((data) => {
                    localStorage.setItem('listName', data.lastListAdded)
                })
        })
}
lastListName();
export const SidebarData = [

    {
        title: 'Home',
        path: `/home/${userId}`,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'My Lists',
        path: `/userLists/${list}`,
        icon: <MdIcons.MdOutlinePlaylistAddCheck />,
        cName: 'nav-text'
    },
    {
        title: 'Compare',
        icon: <MdIcons.MdCompare />,
        path: "/CompareInfluencers",
        cName: 'nav-text',
        // children: [
        //     {
        //         title: "Influencers",
        //         cName: 'nav-nested',
        //     },
        //     {
        //         title: "Lists",
        //         path: "/CompareLists",
        //         cName: 'nav-nested',
        //     }
        // ]
    },
    {
        title: 'Calculator',
        path: '/calculator',
        icon: <AiIcons.AiFillCalculator />,
        cName: 'nav-text'
    },
]