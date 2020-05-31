import React from 'react';
// import A from './A'
import d from './D'

function B() {
    return (
        <div className="B">
            <img src={require('../images/B.jpg')} alt='' />
        </div>
    );
}

export default d(B);
