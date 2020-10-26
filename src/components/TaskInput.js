import React  from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

    }

    addTask = () => {
        const { input } = this.state;
        if(input) {
            this.props.addTask(input);
            this.setState({ input: '' });
        }        
    };

    inputChange = event => {
        this.setState({input: event.target.value });
    };

    handleEnter = event => {
        if(event.key === 'Enter'){
            this.addTask();
        };
    }

    render () {
        const { input } = this.state;
        return (
            <div>
                <input onChange = {this.inputChange} onKeyPress = {this.handleEnter} value={input}></input>
                <button className="btn btn-outline-primary" onClick = {this.addTask}>Добавить</button>
            </div> 
       );        }
    }


export default TaskInput