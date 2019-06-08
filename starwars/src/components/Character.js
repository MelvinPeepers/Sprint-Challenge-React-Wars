import React from 'react';

const Character = props => {
    return (
        <div className="char-card">
                <div className="char-info">
                    <h2>{props.charInfo.name}</h2>
                    <p><span>Birth Year:</span> {props.charInfo.birth_year}</p>
                    <p><span>Gender:</span> {props.charInfo.gender}</p>
                    <p><span>Height:</span> {props.charInfo.height}</p>
                    <p><span>Mass:</span> {props.charInfo.mass}</p>
                </div>
        </div>
    );
}

export default Character;