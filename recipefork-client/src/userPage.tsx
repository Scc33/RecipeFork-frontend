import React from 'react';
import k from "./resource/K.png"

class UserPage extends React.Component {
    render() {
        return <div className="app vertical">
            <div className="horizontal">
                <img src={k} />
                Search
                Plus Button
                UserIcon
            </div>
            <div className="horizontal">
                <div className="vertical vl">
                    <h3>Username</h3>
                    <h4>Posted Recipes</h4>
                    <h4>Forks</h4>
                </div>
                <div className="vertical">
                    <h4>Pinned Recipes</h4>
                    <h4>Contributions</h4>
                </div>
            </div>
        </div>;
    }
}

export default UserPage