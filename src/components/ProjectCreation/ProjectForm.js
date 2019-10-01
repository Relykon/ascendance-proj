import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/Roles';

const ProjectFormPage = () => (
  <div>
    <h1>Project Form</h1>
    <ProjectForm />
  </div>
);

const INITIAL_STATE = {
  project: "",
  desc: "",
  type: "Clerical/Administrative",
  location: "",
  skillset: "Graphic Design",
  time: "Once",
  requirements: "",
  training: "No",
  error: null
};

class ProjectCreateFormBase extends Component{
  constructor(props){
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const {project, desc, type, location, skillset, time, requirements, training} = this.state;

    this.props.firebase
    .doInitialProjectSubmit(project, desc, type, location, skillset, time, requirements, training)
    .then(() => {
      this.setState({...INITIAL_STATE})
    })
    .catch(error => {
      this.setState({error})
    });
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  onChangeCheckBox = event => {
    if(event.target.checked){
      this.setState({ [event.target.name]: "Yes"});
    } else {
      this.setState({ [event.target.name]: "No"});
    }
  }

  doReSize = event => {
    var maxRows = 5;
    var txt = event.target.value;
    var cols = event.target.cols;

    var arrText = txt.split('\n');
    var rows = arrText.length;

    for(let i = 0; i < arrText.length; i++){
      rows += parseInt(arrText[i].length/cols);
    }

    if(rows > maxRows){
      event.target.rows = maxRows;
    }else{
      event.target.rows = rows;
    }
  }

  render() {

    const {project, desc, type, location, skillset, time, requirements, training, error} = this.state;

    const isInvalid = project === '' || desc === '' || location === '' || requirements === '';

    return(
      <form onSubmit={this.onSubmit}>
        <p>Project title</p>
          <input
          type="text"
          name="project"
          value={project}
          onChange={this.onChange}
          />

        <p>Project Description</p>
          <textarea
          name="desc"
          value={desc}
          onChange={this.onChange}
          onKeyUp={this.doReSize}
          cols="20"
          rows="1"
          >
          </textarea>

        <p>Type of Project</p>
          <select name="type" value={type} onChange={this.onChange}>
            <option>Clerical/Administrative</option>
            <option>Mentoring/tutoring</option>
            <option>Advocacy</option>
            <option>In-person care</option>
            <option>Hands-on</option>
            <option>Playing sports</option>
            <option>Administrative</option>
            <option>Technological support</option>
            <option>Specific events</option>
          </select>

        <p>Location</p>
          <input
          type="text"
          name="location"
          value={location}
          onChange={this.onChange}
          />

        <p>Skillset Required</p>
          <select name="skillset" value={skillset} onChange={this.onChange}>
            <option>Graphic Design</option>
            <option>General Strategy</option>
            <option>Telephone support/hotlines</option>
            <option>Design</option>
            <option>Writing</option>
            <option>Website development</option>
            <option>Leadership: planning, scheduling, and development</option>
            <option>Outreach</option>
            <option>Programming</option>
          </select>

        <p>Time Commitment Required</p>
          <select name="time" value={time} onChange={this.onChange}>
            <option>Once</option>
            <option>2-5 Hours</option>
            <option>All day</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>

        <p>Requirements</p>
          <input
          type="text"
          name="requirements"
          value={requirements}
          onChange={this.onChange}
          />

        <p>Training Required?</p>
          <input
          type="checkbox"
          name="training"
          value={training}
          onChange={this.onChangeCheckBox}
          />

        <button disabled={isInvalid} type="submit">
          Submit
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.NONPROFIT];

const ProjectForm = compose(
  withAuthorization(condition),
  withFirebase
)(ProjectCreateFormBase);

export default ProjectFormPage;

export { ProjectForm };