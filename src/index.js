import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML.

const App = () => {
    return <div>Hi!</div>;
};

// Take this component's genrated HTML and put on the on page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container'));
