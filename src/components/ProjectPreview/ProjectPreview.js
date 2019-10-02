import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import * as firebase from 'firebase';

class ProjectsPreview extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
    }
}

componentDidMount() {
    this.db = firebase.database();
    this.listenForChange();
}

listenForChange() {
    this.db.ref('projects').on('child_added', snapshot => {
        let project = {
            id: snapshot.key,
            project: snapshot.val().project,
            desc: snapshot.val().desc,
            type: snapshot.val().type,
            location: snapshot.val().location, 
            skillset: snapshot.val().skillset,
            time: snapshot.val().time,
            requirements: snapshot.val().requirements,
            training: snapshot.val().training    
        }

        let projects = this.state.projects;
        projects.push(project);

        this.setState({
            projects: projects
        }); 
    });   
}
  
render() {
    return (
        <div>
            <ProjectItem projects={this.state.projects} />
        </div>       
        )
    };      
}

export default ProjectsPreview;
