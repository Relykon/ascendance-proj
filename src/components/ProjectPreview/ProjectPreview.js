import React from 'react';
import PropTypes from 'prop-types';
import Projects from './../ProjectCreation/Projects';

function ProjectsList(props){

    return(
        <div>
            {Object.keys(props.projectsList).map(function(projectsId) {
            var projects = props.projectsList[projectsId];
            return <Projects
            project={projects.project}
            type={projects.type}
            location={projects.location}
            skillset={projects.skillset}
            time={projects.time}
            requirements={projects.requirements}
            currentRouterPath={props.currentRouterPath}
            key={projectsId}
            projectsId={projectsId}/>
             })}
        </div>
    );
}

ProjectsList.propTypes = {
    projectsList: PropTypes.object,
    currentRouterPath: PropTypes.string

};

export default ProjectsList;
