import React from 'react';
import PropTypes from 'prop-types';

function Projects(props) {
    const projectsInformation =
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

        .card-title h2 {
            margin: 0;
            padding-top: 5%;
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




        <div class="container">
        <div class="row">

            <div class="col-md-4">
                <div class="card-box">
                    <div class="card-title">
                        <h2>{props.project}</h2>
                        <p>Project Type: {props.type}</p>
                        <p>Location: {props.location}</p>
                        <p>Skillset Require {props.skillset}</p>
                        <p>Time Require {props.time}</p>
                        <p>Requirements: {props.requirements}</p>
                    </div>

                </div>

                </div>
            </div>
        </div>

                </div>















    return(
        <div>
            {projectsInformation}
        </div>
    );

}

Projects.propTypes = {
    project: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    skillset: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    requirements: PropTypes.string.isRequired,
    currentRouterPath: PropTypes.func,
    projectsId: PropTypes.string.isRequired

};

export default Projects;
