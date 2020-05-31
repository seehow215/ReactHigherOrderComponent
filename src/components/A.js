import React, {Component} from 'react';

function A(WrappedComponent) {
    return class A extends Component{
        render() {
            return (
                <div className="a-container">
                    <div className='header'>
                        <div>提示</div>
                        <div>x</div>
                    </div>
                    <div>
                        <WrappedComponent></WrappedComponent>
                    </div>
                </div>
            );
        }
    }
}

export default A;
