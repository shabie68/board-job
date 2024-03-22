import React from 'react';
import ReactDOM from 'react-dom';
import ShowJob from './ShowJob'

function Example() {
    return (
        <div className="container">
            <ShowJob/>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
