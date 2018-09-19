import React from 'react';

const Scroll = (props) => { //props.children always exists. Enables custom wrap tags
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '600px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
