import React from 'react';
import PropTypes from 'prop-types';

function ProjectsForm(props){

       let _project = null;
       let _desc = null;
       let _type = null;
       let _location = null;
       let _skillset = null;
       let _time = null;
       let _requirements = null;
       let _training = null;
    //    let _group = null;
    //    let _groupSize = null;
    //    let _groupType = null;
    //    let _training = null;

   function handleNewProjectsFormSubmission(event){
       event.preventDefault();
       props.onNewProjectsCreation({project: _project.value, desc: _desc.value, type: _type.value, location: _location.value, skillset: _skillset.value, time: _time.value, requirements: _requirements.value, training: _training.value});
       _project = '';
       _desc = '';
       _type = '';
       _location = '';
       _skillset = '';
       _time = '';
       _requirements = '';
       _training = '';
    //    _group = '';
    //    _groupSize = '';
    //    _groupType = '';
    //    _training = '';
   }

        return(
            <div>
                <style jsx>{`
      form {
        margin: 100px;
        margin-left: 300px;
        background: #C0C0C0;
        width: 750px;
        height: 700px;
        padding-left: 150px;
      }
      input {
        width: 400px;
        height: 20px;
        margin: 60px;
        margin-top: 10px;
        margin-bottom: 0px;
        background: white;

      }
      select {
        margin: 60px;
        margin-top: 10px;
        margin-bottom: 0px;
      }
      p{
        padding-left: 60px;
        padding-top: 20px;
        margin-top: 10px;

      }
      h2 {
        padding-left: 120px;
        padding-top: 30px;
        margin-top: 10px;
      }
      button {
        align: left;
      }
      `}
                </style>


            <form onSubmit={handleNewProjectsFormSubmission}>
            <h2>Project Form</h2>
              <p>Project Title</p>
               <input
               type='text'
               id='project'
               ref={(input) => {_project = input;}}/>

               <p>Project Description</p>
               <input
               type='text'
               id='desc'
               ref={(input) => {_desc = input;}}/>

               <div>
               <p>Type of Project</p>
                   <select ref={(select) => _type = select}>
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
               </div>

               <p>Location</p>
               <input
               type='text'
               id='location'
               ref={(input) => {_location = input;}}/>

              <div>
               <p>Skillset Require</p>
                   <select ref={(select) => _skillset = select}>
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
               </div>

               <div>
               <p>Time Commiment Required</p>
                   <select ref={(select) => _time = select}>
                       <option>Once</option>
                       <option>2-5 Hours</option>
                       <option>All day</option>
                       <option>Weekly</option>
                       <option>Monthly</option>
                   </select>
               </div>

               <p>Requirements or Restrictions</p>
               <input
               type='text'
               id='requirements'
               ref={(input) => {_requirements = input;}}/>

               <p>Training Required?</p>
               <input
               type='checkbox'
               id='training'
               ref={(input) => {_training = input;}}/>


              <button type='submit'>Submit</button>
             </form>
            </div>
        );
    }

    ProjectsForm.propTypes = {
    onNewProjectsCreation: PropTypes.func
};


export default ProjectsForm;
