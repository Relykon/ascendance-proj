import React, { Component } from 'react';
import axios from 'axios';

import * as ROUTES from '../../constants/Routes';

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details:'',
            project: '',
            desc:'',
            type:'',
            location:'',
            skillset:'',
            time:'',
            requirements:'',
            training:''           
    }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount(){
        this.getProjectDetails();
    }

    getProjectDetails(){
        let projectId = this.props.match.params.id
        console.log("id", projectId)
        axios.get(`https://project-ascendance.firebaseio.com/projects/${projectId}.json`)
        .then(response => { 
            this.setState({
                key: this.props.match.params.id,
                project: response.data.project,
                desc: response.data.desc,
                type: response.data.type,
                location: response.data.location,
                skillset: response.data.skillset,         
                time: response.data.time,
                requirements: response.data.requirements,
                training: response.data.training
            }, () =>  { 
                console.log("edit", this.state); 
            });
        })
         .catch(err => console.log(err));
    }

    editProject(newProject){
        axios.request({
        method:'put',
        url: `https://project-ascendance.firebaseio.com/projects/${this.state.key}.json`,
        data: newProject
        })
        .then(response => { 
            this.props.history.push(ROUTES.PROJECT_PREVIEW);
               
        })
         .catch(err => console.log(err));
    }

    onSubmit(e){
        const newProject = {
            project: this.refs.project.value,
            desc: this.refs.desc.value,
            type: this.refs.type.value,
            location: this.refs.location.value,
            skillset: this.refs.skillset.value,      
            time: this.refs.time.value,
            requirements: this.refs.requirements.value,
            training: this.refs.training.value
    }
        this.editProject(newProject);
        e.preventDefault();
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onDelete(){
        let projectId = this.state.details.id;
        console.log('delete', projectId)
        axios.delete(`https://project-ascendance.firebaseio.com/projects/${this.state.key}.json`)
        .then(response => {
            this.props.history.push(ROUTES.PROJECT_PREVIEW);
        })    
    };

   render() {
       return (
            <div>     
                <style> 
                    {`
                    .container {
                        padding: 50px;
                    }
                    `}
                </style>

                <div className="container">
                <h1>Edit Project</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
           
                    <div className="input-field">
                        <label htmlFor="project">Project</label>
                        <input type="text" name="project" ref="project" value={this.state.project} onChange={this.handleInputChange.bind(this)} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="desc">Description</label>
                        <input type="text" name="desc" ref="desc" value={this.state.desc} onChange={this.handleInputChange.bind(this)}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="type">type</label>
                        <input type="text" name="type" ref="type" value={this.state.type} onChange={this.handleInputChange.bind(this)}/>
                    </div>
            
                    <div className="input-field">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" ref="location" value={this.state.location} onChange={this.handleInputChange.bind(this)} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="skillset">Skillset</label>
                        <input type="text" name="skillset" ref="skillset" value={this.state.skillset} onChange={this.handleInputChange.bind(this)}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="time">Time</label>
                        <input type="text" name="time" ref="time" value={this.state.time} onChange={this.handleInputChange.bind(this)}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="requirements">Requirements</label>
                        <input type="text" name="requirements" ref="requirements" value={this.state.requirements} onChange={this.handleInputChange.bind(this)}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="training">Training</label>
                        <input type="text" name="training" ref="training" value={this.state.training} onChange={this.handleInputChange.bind(this)}/>
                    </div>
     
                    {/* <input type="submit" value="Save" className="btn" /> */}
                    <button onClick={this.onSubmit.bind(this)} value="Save" className="btn">Save Changes</button>
                
                </form>
                <br />
                <button onClick={this.onDelete.bind(this)} className="btn grey">Delete Project</button>
                        
                </div>
            </div>
       )
   }    
}

export default ProjectDetails;
