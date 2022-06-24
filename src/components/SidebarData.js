import React from 'react';
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        clName: 'nav-text'
        
    },
    {
        title: 'Report',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        clName: 'nav-text'
        
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        clName: 'nav-text'
        
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        clName: 'nav-text'
        
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        clName: 'nav-text'
        
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        clName: 'nav-text'
        
    },
]
