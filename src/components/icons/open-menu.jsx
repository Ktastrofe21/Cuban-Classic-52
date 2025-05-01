import React from 'react';

const OpenMenu = (props) => {
 return (
    <svg {...props} viewBox="0 0 16 16">
        <path d="M3 3v1h10V3zm0 4v1h10V7zm0 4v1h10v-1z" overflow="visible" style={{marker: "none", color: "#000000"}}/>
    </svg>
 );
};

export default OpenMenu;