import React from 'react';

export default class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onSubmit = (event) => {
        if (event.keyCode === 13) {
            const text = event.target.value;
            this.props.onSubmit(text);
            this.setState({
                text: ''
            });
        }
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <li>
                <div>
                    <input type='checkbox' disabled/>
                    <input type='text' value={this.state.text} onKeyDown={this.onSubmit} onChange={this.onChange} />
                </div>
            </li>
        );
    }
}