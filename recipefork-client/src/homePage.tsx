import React from 'react';
import k from "./resource/K.png"

class HomePage extends React.Component {
    render() {
        return <div className="app">
            <div className="horizontal">
                <img src={k} />
                Search
                Plus Button
                UserIcon
            </div>
            <div className="horizontal">
                <div className="vertical vl">
                    Recipes
                </div>
                <div className="vertical">
                    Activity
                </div>
            </div>
        </div>;
    }
}

export default HomePage