import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndividualProject } from './IndividualProject';

export const Projects = ({ activeValue = null }) => {
    const [active,setActive] = useState(activeValue);
    const { setSelectedProject } = useStateProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects && projects.map(projects => (
            <li 
            key={project.projectId}
            data-doc-id={project.docId}
            data-testid="project-action"
            className={
                active === project.projectId
                ? 'active sidebar__project'
                : 'sidebar__project'
            }
            onKeyDown={() => {
                setActive(project.ProjectId);
                setSelectedProject(project.projectId);
            }}
            onClick={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
            }}
            >
                <IndividualProject project={project} />

            </li>
        ))
    )
}