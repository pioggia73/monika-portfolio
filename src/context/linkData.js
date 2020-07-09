import React from 'react';
import {FaHome, FaEnvelopeOpen, FaFolderOpen, FaPencilAlt} from 'react-icons/fa';

export const linkData = [
    {
        id: 1,
        text: 'home',
        path: '/' ,
        icon: <FaHome  className = "link-icon" />

    },{
        id: 2,
        text: 'courses',
        path: '/courses',
        icon: <FaPencilAlt className = "link-icon" />
        
    }, {
        id: 3,
        text: 'portfolio',
        path: '/portfolio',
        icon: <FaFolderOpen className = "link-icon" />

    }, {
        id: 4,
        text: 'contact',
        path: '/contact',
        icon: <FaEnvelopeOpen className = "link-icon" />
    }
]