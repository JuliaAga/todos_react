import React from 'react';

const Task = ({ task, ...props }) => {

    const ActionBtn = () => 
        <div >
            {task.done ?
             <span className="btn btn-outline-danger"
             onClick={props.deleteTask}>Delete</span>
             :
            <span className="btn btn-outline-success"
            onClick={props.doneTask}>Done</span>
            }
        </div>

    const className = 'task ' + (task.done ? 'task-done' : '')
    
    return (<div className = {className}>
        <span className="border border-success rounded ">
            {task.title}
        </span>
        <ActionBtn></ActionBtn>
    </div>
    );
};

export default Task;