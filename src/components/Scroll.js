import React from 'react';

//Scroll wraps components (aka renders its props.children) and makes them "scrollable"
const Scroll = (props) => { 
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '600px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
