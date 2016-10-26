import React from 'react';
import ReactDOM from 'react-dom';

export default class Element extends React.Component  {
    render() {
        return (
            <div className="half-width">
                Debug components here...
            </div>
        )

    }

}

ReactDOM.render( <Element />, document.getElementById('app'));