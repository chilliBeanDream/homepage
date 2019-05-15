import React from 'react';

export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            class: ''
        };
    }

    onChange = (event) => {
        console.log(event.target.checked)
        if (event.target.checked) {
            this.setState({
                class: 'fade'
            });
            setTimeout(() => this.props.onChecked(), 500);
        }
    }

    render() {
        return (
            <li className={this.state.class}>
                <input type='checkbox' onChange={this.onChange}/>
                {this.props.text}
            </li>
        );
    }
}