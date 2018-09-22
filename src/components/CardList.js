import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    //throw new Error('nooo'); //test ErrorBoundry (refresh a lot if in development testing, and not production)
    return (
        <div>
            {   
                robots.map((user, index) => {
                    return <Card key={index} id={user.id} name={user.name} email={user.email}/>
                })
            }
        </div>
    );
}

export default CardList;
