import React from 'react';

const Character = props => {
    return (
        <div className="char-card">
            <h2>{props.charInfo.name}</h2>
        </div>
    );
}



export default Character;