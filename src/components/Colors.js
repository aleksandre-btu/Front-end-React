import React, { useState } from 'react';
import './colors.css'

const Colors = () => {

    const [colors, setColors] = useState(['white','brown','pink', 'orange', 'purple', 'blue', 'green', 'yellow']);
    const [givenColor, setGivenColor] = useState('');

    return (
        <div>
        <div className="colors">
                {colors.map((color, index) => {
                    return <button className='coloredButton' onClick={() => setGivenColor(color)} key={index} style={{backgroundColor: color}}/>
                })}
            </div>
            <div className='text' style={{backgroundColor: givenColor}}> Your color is this </div>
        </div>
    );
};

export default Colors;