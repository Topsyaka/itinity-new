import React from 'react';
import ReactDOM from 'react-dom';

class TabComponent extends React.Component{

    render(){
        return(<h1>Hello, world!</h1>);
    }
}

ReactDOM.render(
    <TabComponent/>,
    document.getElementById('root')
);