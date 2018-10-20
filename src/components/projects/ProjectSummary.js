import React from 'react'
import moment from 'moment'
const ProjectSummary = ({project}) =>{
    return (
        <div className="card z-depth-0 project-summary">
            <span className="card-title">{project.title} </span>
            <p>Posted by {project.authorFirstName}</p>
            <p className="greg-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>

    )
}
export default ProjectSummary