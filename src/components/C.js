import React from 'react';
import A from './A'

function C() {
    return (
        <div className="C">
            <img src={require('../images/C.jpg')} alt='' />
        </div>
    );
}

export default A(C);
