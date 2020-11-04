import React from 'react';

function Food({ fav }) {
    return <h1>I like { fav }</h1>;
}

//const foodIlike = [];

function App() {
    return (<div>
        <h1>Hello!!!! </h1>
        <Food fav="Potato" />
    </div>);
}

export default App;
