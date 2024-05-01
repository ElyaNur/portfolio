import ListProjects from "@/components/projects/list-projects/list-projects";
import projects from "@/components/projects/projects.json";
import {useMemo} from "react";
import FullProjects from "@/components/projects/full-projects";

const Projects = () => {
    const projectList = useMemo(() =>
            projects.map(exp => ({...exp, id: crypto.randomUUID()})),
        []
    )

    return (
        <div>
            <ul className="group/list">
                {projectList.map((exp) => (
                    <ListProjects
                        key={exp.id}
                        title={exp.title}
                        link={exp.link}
                        description={exp.description}
                        image={exp.image}
                    />
                ))}
            </ul>
            <FullProjects/>
        </div>
    );
};

export default Projects;