import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProjectItem extends Component {

   render() {
       return(
            <div>
                <style>{`
                    .card-box {
                        background: #FAFAFA;
                        min-height: 300px;
                        position: relative;
                        padding: 30px 30px 20px;
                        margin-bottom: 20px;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        -webkit-box-pack: justify;
                        -ms-flex-pack: justify;
                        justify-content: space-between;
                        position: relative;
                        cursor: pointer;  
                    }

                    .card-box:hover {
                        background: linear-gradient(to right, #1fa2ff17 0%, #12d8fa2b 51%, #1fa2ff36 100%);
                    }

                    .card-box:after {
                        display: block;
                        background: #2196F3;
                        border-top: 2px solid #2196F3;
                        content: '';
                        width: 100%;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                    }

                    .card-title h4 {
                        margin: 0;
                        // padding-top: 5%;
                        color: #2196F3;
                        font-family: 'Oswald', sans-serif;
                        text-transform: uppercase;
                        font-size: 24px;
                        line-height: 1;
                        margin-bottom: 15px;
                    }

                    .card-title p {
                        margin: 0;
                        margin-bottom: 10px;
                        font-size: 16px;
                    }

                `}</style>
  
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-box">
                                <div className="card-title">
                                    {this.props.projects.map(project => (
                                        <div className="note" key={project.id}>
                                            <div className="project-list">
                                                <h4>{project.project}</h4>   
                                                <p><b>Project Description:</b> {project.desc}</p> 
                                                <p><b>Type of Project:</b> {project.type}</p>
                                                <p><b>Location:</b> {project.location}</p>
                                                <p><b>Skillsets Required:</b> {project.skillset}</p> 
                                                <p><b>Time Commitment Required:</b> {project.time}</p>
                                                <p><b>Requirements:</b> {project.requirements}</p> 
                                                <p><b>Training Required:</b> {project.training}</p>
                                                <Link to={`/projectDetails/${project.id}`}> Edit/Delete</Link>
                                                <hr/><br/>
                                            </div>
                                        </div>
                                    ))}                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectItem;
