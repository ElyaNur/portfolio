import ListExperience from "@/components/experience/list-experience/list-experience";
import experience from '@/components/experience/experience.json';
import {useMemo} from "react";
import FullResume from "@/components/experience/full-resume";

const Experience = () => {
    const experienceList = useMemo(() =>
            experience.map(exp => ({...exp, id: crypto.randomUUID()})),
        []
    )

    return (
        <div>
            <ol className="group/list">
                {experienceList.map((exp) => (
                    <ListExperience
                        key={exp.id}
                        duration={exp.duration}
                        title={exp.title}
                        workOn={exp.company}
                        description={exp.description}
                        link={exp.link}
                        technologies={exp.technologies}
                    />
                ))}
            </ol>
            <FullResume/>
        </div>
    );
};

export default Experience;