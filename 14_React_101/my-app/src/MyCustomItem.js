import React from 'react';

class MyCustomItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clicks: 0,
            totalRemaining: 5,
        }
    }
    clickMe(){
        console.log(this.props.name, "was booped!");
        this.setState({
            clicks: this.state.clicks+1,
            totalRemaining: this.state.totalRemaining-1
        })
    }

    render() {
    return(
        <div>
            <h1 onClick={() => this.clickMe()}>I MUST BOOP {this.props.name}</h1>
            <span>{this.props.name} has been booped {this.state.clicks} time(s)</span> <br/>
            <span>You have {this.state.totalRemaining} boops left until {this.props.name} leaves</span>
        </div>
    )
    }
}


export default MyCustomItem;