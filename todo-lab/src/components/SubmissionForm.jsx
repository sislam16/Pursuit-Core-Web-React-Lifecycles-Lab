import React from 'react';

class SubmissionForm extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue:''
        }
    }

    handleSubmit = (event) =>{
        console.log('submitted')
    }

    render(){
        return(
            <div className = 'submissionForm'>
                <h1>Todos</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type = 'text' placeholder = 'Add todo here'/>
                </form>
            </div>
        )
    }
}

export default SubmissionForm;