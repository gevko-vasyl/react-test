import React from 'react'

class MySecondComponent extends React.Component {
    render() {
        return (
            <div className="second-component">
                <h4>second component</h4>
                <p>dasdadfagsdgsdgfsgada</p>
                <p>username: {this.props.user.name}</p>
            </div>
        );
    }

}

export default MySecondComponent;